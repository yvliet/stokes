import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import katex from 'katex';
import {
  CopyIcon,
  CheckIcon,
  ClockIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  LinkIcon,
  InfoIcon,
  LightbulbIcon,
  WarningIcon,
  WarningCircleIcon,
  ShieldWarningIcon,
} from './Icons.tsx';
import {
  DOCS_TREE,
  flattenDocs,
  findDocBySlug,
  type DocItem,
  type TocHeading,
} from '../../data/docsContent.ts';
import { highlightCode } from './syntaxHighlighter.ts';
import { MermaidBlock } from './MermaidBlock.tsx';
import { WikilinkHoverPreview } from './WikilinkHoverPreview.tsx';

export interface DocsReaderProps {
  doc: DocItem;
  prevDoc?: DocItem | null;
  nextDoc?: DocItem | null;
  onSelectDoc: (doc: DocItem) => void;
  onHeadingsExtracted?: (headings: TocHeading[]) => void;
}

// Helper to slugify heading text
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Split markdown table rows while protecting escaped pipes, inline code, and math
export function splitTableRow(line: string): string[] {
  const placeholders: string[] = [];
  const placeholder = (idx: number) => `\x00PIPE_${idx}\x00`;

  // Protect escaped pipes \|
  let protectedLine = line.replace(/\\\|/g, () => {
    const token = placeholder(placeholders.length);
    placeholders.push('|');
    return token;
  });

  // Protect code spans
  protectedLine = protectedLine.replace(/(`+)([\s\S]*?)\1/g, (match) => {
    const token = placeholder(placeholders.length);
    placeholders.push(match);
    return token;
  });

  // Protect math spans ($...$)
  protectedLine = protectedLine.replace(/(?<!\\)\$(?!\s)([^\$\r\n]+?)(?<!\s)(?<!\\)\$/g, (match) => {
    const token = placeholder(placeholders.length);
    placeholders.push(match);
    return token;
  });

  const rawCells = protectedLine.split('|');

  let startIndex = 0;
  let endIndex = rawCells.length;
  if (rawCells.length > 0 && rawCells[0].trim() === '') {
    startIndex = 1;
  }
  if (rawCells.length > startIndex && rawCells[rawCells.length - 1].trim() === '') {
    endIndex = rawCells.length - 1;
  }

  return rawCells.slice(startIndex, endIndex).map((cell) => {
    let restored = cell.trim();
    for (let i = 0; i < placeholders.length; i++) {
      restored = restored.replace(new RegExp(`\x00PIPE_${i}\x00`, 'g'), () => placeholders[i]);
    }
    return restored;
  });
}

// Safe KaTeX renderer resilient against SSR/ESM/CJS interop and syntax anomalies
export function safeRenderKaTeX(tex: string, displayMode: boolean): string {
  try {
    const k = (katex as any)?.default || katex;
    if (k && typeof k.renderToString === 'function') {
      return k.renderToString(tex, {
        displayMode,
        throwOnError: false,
      });
    }
  } catch {
    // Graceful fallback on syntax or KaTeX execution error
  }
  return '';
}

// Resolve image paths for docs assets, compliance evidence, and session checkpoints
export function resolveDocImagePath(rawPath: string): string {
  const trimmed = rawPath.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:')) {
    return trimmed;
  }
  // Strip leading relative path segments (./ or ../)
  const clean = trimmed.replace(/^(\.\.?\/)+/, '');

  if (clean.includes('lablab_') || clean.includes('compliance')) {
    const filename = clean.split('/').pop() || clean;
    return `/docs/compliance/${filename}`;
  }
  if (
    clean.includes('session_') ||
    clean.includes('core_engine') ||
    clean.includes('dark_mode') ||
    clean.includes('tree_subagents') ||
    clean.includes('pypi_package') ||
    clean.includes('github_publish') ||
    clean.includes('bob_sessions')
  ) {
    const filename = clean.split('/').pop() || clean;
    return `/bob_sessions/${filename}`;
  }
  if (clean.startsWith('docs/')) {
    return `/${clean}`;
  }
  if (clean.startsWith('bob_sessions/')) {
    return `/${clean}`;
  }
  if (trimmed.startsWith('/')) {
    return trimmed;
  }
  return `/${clean}`;
}

// Render inline markdown tokens (bold, italic, code, KaTeX math, wikilinks, links)
export function renderInline(text: string): string {
  // 1. Protect inline code spans
  const codeTokens: string[] = [];
  const codePlaceholder = (idx: number) => `\x01CODE_${idx}\x02`;

  let processed = text.replace(/(`+)([\s\S]*?)\1/g, (_, __, content) => {
    let codeText = content;
    if (codeText.length >= 2 && codeText.startsWith(' ') && codeText.endsWith(' ') && codeText.trim().length > 0) {
      codeText = codeText.slice(1, -1);
    }
    const escaped = codeText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const html = `<code class="px-1.5 py-0.5 rounded text-[0.875em] font-mono bg-muted/60 text-foreground border border-border/50">${escaped}</code>`;
    const token = codePlaceholder(codeTokens.length);
    codeTokens.push(html);
    return token;
  });

  // 2. KaTeX inline math: $...$
  const mathTokens: string[] = [];
  const mathPlaceholder = (idx: number) => `\x01MATH_${idx}\x02`;

  processed = processed.replace(/(?<!\\)\$(?!\s)([^\$\r\n]+?)(?<!\s)(?<!\\)\$/g, (match, tex) => {
    const trimmed = tex.trim();
    if (!trimmed) return match;
    const rendered = safeRenderKaTeX(trimmed, false);
    if (rendered) {
      const token = mathPlaceholder(mathTokens.length);
      mathTokens.push(rendered);
      return token;
    }
    return match;
  });

  // 3. Escape HTML
  processed = processed
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // 4. Embedded image wikilinks ![[image.png|alt]] or ![[image.png]]
  processed = processed.replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, opt) => {
    const isWidth = opt && /^\d+$/.test(opt.trim());
    const widthStyle = isWidth ? `style="max-width:${opt.trim()}px"` : '';
    const alt = isWidth || !opt ? target.trim() : opt.trim();
    const src = resolveDocImagePath(target.trim());
    return `<a href="${src}" target="_blank" rel="noopener noreferrer" class="inline-block cursor-zoom-in" title="${alt}"><img src="${src}" alt="${alt}" ${widthStyle} class="rounded-lg border border-border/50 inline-block max-h-80 align-middle my-2 shadow-sm transition-all hover:border-foreground/40" loading="lazy" /></a>`;
  });

  // 4b. Standard markdown image ![alt](url "title") or ![alt](url)
  processed = processed.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g, (_, alt, target, title) => {
    const src = resolveDocImagePath(target.trim());
    const caption = title || alt || '';
    return `<a href="${src}" target="_blank" rel="noopener noreferrer" class="inline-block cursor-zoom-in" title="${caption}"><img src="${src}" alt="${alt || ''}" class="rounded-lg border border-border/50 inline-block max-h-80 align-middle my-2 shadow-sm transition-all hover:border-foreground/40" loading="lazy" /></a>`;
  });

  // 5. Obsidian Wikilinks: [[Target|Label]] or [[Target]]
  processed = processed
    .replace(
      /\[\[([^\]|]+)\|([^\]]+)\]\]/g,
      '<a href="#$1" data-wikilink="$1" class="internal-link underline underline-offset-2 text-foreground hover:text-primary font-normal cursor-pointer transition-colors">$2</a>'
    )
    .replace(
      /\[\[([^\]]+)\]\]/g,
      '<a href="#$1" data-wikilink="$1" class="internal-link underline underline-offset-2 text-foreground hover:text-primary font-normal cursor-pointer transition-colors">$1</a>'
    );

  // 6. Markdown Links [text](url)
  processed = processed.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="underline underline-offset-2 text-foreground hover:text-primary font-normal transition-colors">$1</a>'
  );

  // 7. Bold **text**
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-medium text-foreground">$1</strong>');

  // 8. Italic *text*
  processed = processed.replace(/\*([^*]+)\*/g, '<em class="italic text-foreground/90">$1</em>');

  // 9. Strikethrough ~~text~~
  processed = processed.replace(/~~([^~]+)~~/g, '<del class="line-through text-muted-foreground">$1</del>');

  // 10. Restore math tokens
  for (let mIdx = 0; mIdx < mathTokens.length; mIdx++) {
    processed = processed.replace(mathPlaceholder(mIdx), () => mathTokens[mIdx]);
  }

  // 11. Restore code tokens
  for (let cIdx = 0; cIdx < codeTokens.length; cIdx++) {
    processed = processed.replace(codePlaceholder(cIdx), () => codeTokens[cIdx]);
  }

  return processed;
}

export const DocsReader: React.FC<DocsReaderProps> = React.memo(({
  doc,
  prevDoc,
  nextDoc,
  onSelectDoc,
  onHeadingsExtracted,
}) => {
  const [copiedPage, setCopiedPage] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);
  const [copiedHeadingId, setCopiedHeadingId] = useState<string | null>(null);
  const articleRef = useRef<HTMLElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const allDocs = useMemo(() => flattenDocs(DOCS_TREE), []);

  // Helper to normalize strings for robust wikilink comparison
  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Lookup doc by wikilink target with alias, title, id, slug fallback
  const findDocByTarget = useCallback((target: string): DocItem | null => {
    const cleanTarget = target.split('#')[0].replace(/&amp;/g, '&').trim();
    if (!cleanTarget) return null;
    const lowerTarget = cleanTarget.toLowerCase();
    const normTarget = normalize(cleanTarget);

    for (const item of allDocs) {
      if (
        item.id.toLowerCase() === lowerTarget ||
        item.title.toLowerCase() === lowerTarget ||
        item.slug.toLowerCase() === lowerTarget ||
        normalize(item.id) === normTarget ||
        normalize(item.title) === normTarget ||
        normalize(item.slug) === normTarget
      ) {
        return item;
      }
    }

    // Substring fallback
    for (const item of allDocs) {
      const itemTitleNorm = normalize(item.title);
      const itemIdNorm = normalize(item.id);
      if (
        itemTitleNorm.includes(normTarget) ||
        normTarget.includes(itemTitleNorm) ||
        itemIdNorm.includes(normTarget) ||
        normTarget.includes(itemIdNorm)
      ) {
        return item;
      }
    }

    return null;
  }, [allDocs]);

  // Click delegation for internal wikilinks and hash links
  const handleContentClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a.internal-link');
    if (target) {
      const rawTarget = target.getAttribute('data-wikilink');
      if (rawTarget) {
        e.preventDefault();
        const [docTarget, anchor] = rawTarget.split('#');
        const match = findDocByTarget(docTarget);
        if (match) {
          onSelectDoc(match);
          if (anchor) {
            setTimeout(() => {
              const el = document.getElementById(slugify(anchor));
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 80);
          }
        } else {
          window.location.hash = slugify(docTarget);
        }
      }
    }
  }, [findDocByTarget, onSelectDoc]);

  // Hover preview state & timers for internal wikilinks
  const [hoverPreview, setHoverPreview] = useState<{
    targetDoc: DocItem | null;
    targetTitle: string;
    anchorRect: DOMRect;
  } | null>(null);

  const hoverOpenTimerRef = useRef<any>(null);
  const hoverCloseTimerRef = useRef<any>(null);
  const hoveredLinkRef = useRef<HTMLElement | null>(null);
  const isMouseOverPreviewRef = useRef<boolean>(false);

  const clearHoverTimers = useCallback(() => {
    if (hoverOpenTimerRef.current) {
      clearTimeout(hoverOpenTimerRef.current);
      hoverOpenTimerRef.current = null;
    }
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
  }, []);

  const handleCloseHoverPreview = useCallback(() => {
    clearHoverTimers();
    isMouseOverPreviewRef.current = false;
    hoveredLinkRef.current = null;
    setHoverPreview(null);
  }, [clearHoverTimers]);

  const handleContentMouseOver = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const targetElem = e.target as HTMLElement | null;
    if (!targetElem) return;

    if (targetElem.closest('[data-wikilink-hover-preview="true"]')) return;

    const link = targetElem.closest('a.internal-link[data-wikilink]') as HTMLElement | null;
    if (!link) return;

    if (hoveredLinkRef.current === link) {
      if (hoverCloseTimerRef.current) {
        clearTimeout(hoverCloseTimerRef.current);
        hoverCloseTimerRef.current = null;
      }
      return;
    }

    clearHoverTimers();
    hoveredLinkRef.current = link;

    const rawTarget = link.getAttribute('data-wikilink');
    if (!rawTarget) return;

    const [docTarget] = rawTarget.split('#');
    const match = findDocByTarget(docTarget);

    hoverOpenTimerRef.current = setTimeout(() => {
      if (!link.isConnected) return;
      if (hoveredLinkRef.current !== link) return;

      const rect = link.getBoundingClientRect();
      setHoverPreview({
        targetDoc: match,
        targetTitle: docTarget,
        anchorRect: rect,
      });
    }, 250);
  }, [clearHoverTimers, findDocByTarget]);

  const handleContentMouseOut = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoveredLinkRef.current) return;

    const relatedTarget = e.relatedTarget as Node | null;
    if (relatedTarget && hoveredLinkRef.current.contains(relatedTarget)) {
      return;
    }

    if (hoverOpenTimerRef.current) {
      clearTimeout(hoverOpenTimerRef.current);
      hoverOpenTimerRef.current = null;
    }

    if (relatedTarget && (relatedTarget as HTMLElement).closest?.('[data-wikilink-hover-preview="true"]')) {
      return;
    }

    if (!isMouseOverPreviewRef.current) {
      if (hoverCloseTimerRef.current) {
        clearTimeout(hoverCloseTimerRef.current);
        hoverCloseTimerRef.current = null;
      }
      setHoverPreview(null);
      hoveredLinkRef.current = null;
    }
  }, []);

  const handleMouseEnterPreview = useCallback(() => {
    isMouseOverPreviewRef.current = true;
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
  }, []);

  const handleMouseLeavePreview = useCallback((e?: React.MouseEvent) => {
    isMouseOverPreviewRef.current = false;
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
    const relatedTarget = e?.relatedTarget as Node | null;
    if (relatedTarget && hoveredLinkRef.current && hoveredLinkRef.current.contains(relatedTarget)) {
      return;
    }
    setHoverPreview(null);
    hoveredLinkRef.current = null;
  }, []);

  useEffect(() => {
    handleCloseHoverPreview();
  }, [doc.id, handleCloseHoverPreview]);

  // Parse document content into structured blocks
  const { blocks, headings } = useMemo(() => {
    // Strip leading frontmatter defensively if present
    const cleanContent = doc.content.replace(/^---[\s\S]*?---\n*/, '');
    const rawLines = cleanContent.replace(/\r\n/g, '\n').split('\n');
    const extractedHeadings: TocHeading[] = [];
    const parsedBlocks: React.ReactNode[] = [];

    let i = 0;
    let codeIndexCounter = 0;

    while (i < rawLines.length) {
      const line = rawLines[i];
      const trimmed = line.trim();

      // Horizontal Rule
      if (trimmed === '---' || trimmed === '***') {
        // Drop the top rule of a sandwiched heading:
        // If a horizontal rule precedes a heading that already has a rule below it,
        // prioritize the rule below the heading and skip this top one.
        let nextNonEmptyIdx = i + 1;
        while (nextNonEmptyIdx < rawLines.length && !rawLines[nextNonEmptyIdx].trim()) {
          nextNonEmptyIdx++;
        }
        if (nextNonEmptyIdx < rawLines.length) {
          const nextTrimmed = rawLines[nextNonEmptyIdx].trim();
          if (/^#{1,6}\s+/.test(nextTrimmed)) {
            let afterHeadingIdx = nextNonEmptyIdx + 1;
            while (afterHeadingIdx < rawLines.length && !rawLines[afterHeadingIdx].trim()) {
              afterHeadingIdx++;
            }
            if (afterHeadingIdx < rawLines.length) {
              const afterTrimmed = rawLines[afterHeadingIdx].trim();
              if (afterTrimmed === '---' || afterTrimmed === '***') {
                i++;
                continue;
              }
            }
          }
        }

        // Check if this horizontal rule is right below a heading (heading -> hr)
        let prevNonEmptyIdx = i - 1;
        while (prevNonEmptyIdx >= 0 && !rawLines[prevNonEmptyIdx].trim()) {
          prevNonEmptyIdx--;
        }
        const isFollowHeading = prevNonEmptyIdx >= 0 && /^#{1,6}\s+/.test(rawLines[prevNonEmptyIdx].trim());

        // Check if this horizontal rule is right above a heading (hr -> heading)
        const isPrecedingHeading = nextNonEmptyIdx < rawLines.length && /^#{1,6}\s+/.test(rawLines[nextNonEmptyIdx].trim());

        let hrMargin = "my-8";
        if (isFollowHeading && isPrecedingHeading) {
          hrMargin = "mt-1.5 mb-4";
        } else if (isFollowHeading) {
          hrMargin = "mt-1.5 mb-6";
        } else if (isPrecedingHeading) {
          hrMargin = "mt-6 mb-3";
        }

        parsedBlocks.push(
          <hr key={`hr-${i}`} className={`border-t border-border/40 ${hrMargin}`} />
        );
        i++;
        continue;
      }

      // Embedded Image Wikilink Block: ![[image.png]] or ![[image.png|caption/width]]
      const blockImgMatch = trimmed.match(/^!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]$/);
      if (blockImgMatch) {
        const rawPath = blockImgMatch[1].trim();
        const option = blockImgMatch[2]?.trim() || '';
        const isWidth = /^\d+$/.test(option);
        const width = isWidth ? parseInt(option, 10) : undefined;
        const caption = isWidth ? '' : option;
        const src = resolveDocImagePath(rawPath);

        parsedBlocks.push(
          <figure key={`embed-img-${i}`} className="my-6 flex flex-col items-center">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-zoom-in group max-w-full"
              title="Click to view full size image"
            >
              <img
                src={src}
                alt={caption || rawPath}
                style={width ? { maxWidth: `${width}px` } : undefined}
                className="rounded-xl border border-border/50 max-w-full h-auto shadow-md transition-all group-hover:border-foreground/40 group-hover:shadow-lg"
                loading="lazy"
              />
            </a>
            {caption && (
              <figcaption className="mt-2.5 text-xs text-muted-foreground font-mono lowercase tracking-wide">
                {caption}
              </figcaption>
            )}
          </figure>
        );
        i++;
        continue;
      }

      // Standard Markdown Image Block: ![alt](url) or ![alt](url "title")
      const mdImgBlockMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/);
      if (mdImgBlockMatch) {
        const alt = mdImgBlockMatch[1].trim();
        const rawPath = mdImgBlockMatch[2].trim();
        const title = mdImgBlockMatch[3]?.trim() || '';
        const caption = title || alt;
        const src = resolveDocImagePath(rawPath);

        parsedBlocks.push(
          <figure key={`md-img-${i}`} className="my-6 flex flex-col items-center">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-zoom-in group max-w-full"
              title="Click to view full size image"
            >
              <img
                src={src}
                alt={alt || rawPath}
                className="rounded-xl border border-border/50 max-w-full h-auto shadow-md transition-all group-hover:border-foreground/40 group-hover:shadow-lg"
                loading="lazy"
              />
            </a>
            {caption && (
              <figcaption className="mt-2.5 text-xs text-muted-foreground font-mono lowercase tracking-wide">
                {caption}
              </figcaption>
            )}
          </figure>
        );
        i++;
        continue;
      }

      // Display Math Blocks ($$ ... $$)
      const singleLineMath = trimmed.match(/^\$\$(.+?)\$\$$/);
      if (singleLineMath) {
        const mathCode = singleLineMath[1].trim();
        const html = safeRenderKaTeX(mathCode, true);
        if (html) {
          parsedBlocks.push(
            <div
              key={`math-${i}`}
              className="my-5 overflow-x-auto py-3 px-1 text-center bg-transparent border-0"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } else {
          parsedBlocks.push(
            <div key={`math-${i}`} className="my-5 p-2 bg-transparent text-center font-mono text-xs text-red-400 border-0">
              {mathCode}
            </div>
          );
        }
        i++;
        continue;
      }

      if (trimmed === '$$' || (trimmed.startsWith('$$') && !trimmed.slice(2).includes('$$'))) {
        const mathLines: string[] = [];
        const rest = trimmed.slice(2).trim();
        if (rest) mathLines.push(rest);
        i++;

        while (i < rawLines.length && !rawLines[i].trim().endsWith('$$')) {
          mathLines.push(rawLines[i]);
          i++;
        }
        if (i < rawLines.length) {
          const ending = rawLines[i].trim().replace(/\$\$$/, '').trim();
          if (ending) mathLines.push(ending);
          i++;
        }

        const mathCode = mathLines.join('\n').trim();
        const html = safeRenderKaTeX(mathCode, true);
        if (html) {
          parsedBlocks.push(
            <div
              key={`math-${i}`}
              className="my-5 overflow-x-auto py-3 px-1 text-center bg-transparent border-0"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } else {
          parsedBlocks.push(
            <div key={`math-${i}`} className="my-5 p-2 bg-transparent text-center font-mono text-xs text-red-400 border-0">
              {mathCode}
            </div>
          );
        }
        continue;
      }

      // Code Block ```lang
      if (trimmed.startsWith('```')) {
        const lang = trimmed.slice(3).trim();
        const codeLines: string[] = [];
        i++;
        while (i < rawLines.length && !rawLines[i].trim().startsWith('```')) {
          codeLines.push(rawLines[i]);
          i++;
        }
        i++; // skip closing ```
        const rawCode = codeLines.join('\n');

        // Mermaid Diagram Dispatch
        if (lang.toLowerCase() === 'mermaid') {
          parsedBlocks.push(
            <MermaidBlock key={`mermaid-${i}`} code={rawCode} />
          );
          continue;
        }

        const highlighted = highlightCode(rawCode, lang);
        const thisCodeIdx = codeIndexCounter++;

        parsedBlocks.push(
          <div
            key={`code-${i}`}
            className="my-5 rounded-xl border border-border/50 bg-[#121213] dark:bg-[#101011] text-foreground overflow-hidden text-xs sm:text-[13px] font-mono shadow-sm"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-border/40 bg-[#18181a] dark:bg-[#151516]">
              <span className="text-[11px] sm:text-xs text-muted-foreground font-mono lowercase">
                {lang || 'text'}
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(rawCode);
                  setCopiedCodeIdx(thisCodeIdx);
                  setTimeout(() => setCopiedCodeIdx(null), 2000);
                }}
                className="flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground hover:text-foreground px-2 py-0.5 rounded cursor-pointer transition-colors"
                title="Copy code"
              >
                {copiedCodeIdx === thisCodeIdx ? (
                  <>
                    <CheckIcon size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">copied</span>
                  </>
                ) : (
                  <>
                    <CopyIcon size={12} />
                    <span>copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-[13px] sm:text-sm leading-relaxed bg-[#121213] dark:bg-[#101011]">
              <code dangerouslySetInnerHTML={{ __html: highlighted }} />
            </pre>
          </div>
        );
        continue;
      }

      // GitHub Callout > [!TYPE]
      if (trimmed.startsWith('> [!')) {
        const calloutMatch = trimmed.match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|INFO|SUCCESS|DANGER)\]\s*(.*)$/i);
        if (calloutMatch) {
          const type = calloutMatch[1].toUpperCase();
          const inlineTitle = calloutMatch[2];
          const calloutLines: string[] = [];
          i++;
          while (i < rawLines.length && rawLines[i].trim().startsWith('>')) {
            calloutLines.push(rawLines[i].replace(/^>\s?/, ''));
            i++;
          }

          let style = {
            border: 'border-blue-500/40',
            bg: 'bg-blue-500/5',
            text: 'text-blue-500 dark:text-blue-400',
            icon: InfoIcon,
            title: 'Note',
          };

          if (type === 'TIP') {
            style = {
              border: 'border-emerald-500/40',
              bg: 'bg-emerald-500/5',
              text: 'text-emerald-600 dark:text-emerald-400',
              icon: LightbulbIcon,
              title: 'Tip',
            };
          } else if (type === 'IMPORTANT') {
            style = {
              border: 'border-purple-500/40',
              bg: 'bg-purple-500/5',
              text: 'text-purple-600 dark:text-purple-400',
              icon: WarningIcon,
              title: 'Important',
            };
          } else if (type === 'WARNING') {
            style = {
              border: 'border-amber-500/40',
              bg: 'bg-amber-500/5',
              text: 'text-amber-600 dark:text-amber-400',
              icon: WarningCircleIcon,
              title: 'Warning',
            };
          } else if (type === 'CAUTION' || type === 'DANGER') {
            style = {
              border: 'border-rose-500/40',
              bg: 'bg-rose-500/5',
              text: 'text-rose-600 dark:text-rose-400',
              icon: ShieldWarningIcon,
              title: 'Caution',
            };
          }

          const CalloutIcon = style.icon;

          parsedBlocks.push(
            <div
              key={`callout-${i}`}
              className={`my-5 p-4 sm:p-5 rounded-xl border ${style.border} ${style.bg} space-y-2 text-sm text-left`}
            >
              <div className={`flex items-center gap-1.5 font-sans font-medium text-xs sm:text-sm lowercase ${style.text}`}>
                <CalloutIcon size={15} className="shrink-0" />
                <span>{inlineTitle || style.title}</span>
              </div>
              <div className="text-muted-foreground leading-relaxed font-light space-y-1.5 text-sm sm:text-base">
                {calloutLines.map((cLine, cIdx) => (
                  <p
                    key={cIdx}
                    dangerouslySetInnerHTML={{ __html: renderInline(cLine) }}
                  />
                ))}
              </div>
            </div>
          );
          continue;
        }
      }

      // Standard Blockquote > quote
      if (trimmed.startsWith('>')) {
        const quoteLines: string[] = [];
        while (i < rawLines.length && rawLines[i].trim().startsWith('>')) {
          quoteLines.push(rawLines[i].replace(/^>\s?/, ''));
          i++;
        }
        parsedBlocks.push(
          <blockquote
            key={`quote-${i}`}
            className="my-5 pl-4 border-l-2 border-border/80 italic text-muted-foreground text-sm sm:text-base font-light leading-relaxed"
          >
            {quoteLines.map((qLine, qIdx) => (
              <p
                key={qIdx}
                dangerouslySetInnerHTML={{ __html: renderInline(qLine) }}
              />
            ))}
          </blockquote>
        );
        continue;
      }

      // Headings H1 through H6
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        const cleanText = text.replace(/[`*]/g, '');
        const id = slugify(cleanText);

        extractedHeadings.push({ id, text: cleanText, level });

        // Check if preceded or followed by a horizontal rule to tighten spacing
        let prevNonEmptyIdx = i - 1;
        while (prevNonEmptyIdx >= 0 && !rawLines[prevNonEmptyIdx].trim()) {
          prevNonEmptyIdx--;
        }
        const precededByHr = prevNonEmptyIdx >= 0 && (rawLines[prevNonEmptyIdx].trim() === '---' || rawLines[prevNonEmptyIdx].trim() === '***');

        let nextNonEmptyIdx = i + 1;
        while (nextNonEmptyIdx < rawLines.length && !rawLines[nextNonEmptyIdx].trim()) {
          nextNonEmptyIdx++;
        }
        const followedByHr = nextNonEmptyIdx < rawLines.length && (rawLines[nextNonEmptyIdx].trim() === '---' || rawLines[nextNonEmptyIdx].trim() === '***');

        const topPadH1 = precededByHr ? 'pt-3' : 'pt-6';
        const botPadH1 = followedByHr ? 'pb-0' : 'pb-2';
        const topPadH2 = precededByHr ? 'pt-3' : 'pt-8';
        const botPadH2 = followedByHr ? 'pb-0' : 'pb-1';
        const topPadH3 = precededByHr ? 'pt-3' : 'pt-6';
        const botPadH3 = followedByHr ? 'pb-0' : 'pb-1';
        const topPadH4 = precededByHr ? 'pt-2' : 'pt-4';
        const botPadH4 = followedByHr ? 'pb-0' : 'pb-1';
        const topPadH56 = precededByHr ? 'pt-2' : 'pt-3';
        const botPadH56 = followedByHr ? 'pb-0' : 'pb-1';

        if (level === 1) {
          parsedBlocks.push(
            <div key={`h1-${i}`} className={`${topPadH1} ${botPadH1} text-left`}>
              <h1
                id={id}
                className="group flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-foreground tracking-tight scroll-mt-24"
              >
                <span dangerouslySetInnerHTML={{ __html: renderInline(text) }} />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = id;
                    navigator.clipboard.writeText(window.location.href);
                    setCopiedHeadingId(id);
                    setTimeout(() => setCopiedHeadingId(null), 1500);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground transition-opacity p-0.5"
                  aria-label="Copy section link"
                  title="Copy link to section"
                >
                  {copiedHeadingId === id ? (
                    <CheckIcon size={16} className="text-emerald-400" />
                  ) : (
                    <LinkIcon size={16} />
                  )}
                </button>
              </h1>
            </div>
          );
        } else if (level === 2) {
          parsedBlocks.push(
            <div key={`h2-${i}`} className={`${topPadH2} ${botPadH2} text-left`}>
              <h2
                id={id}
                className="group flex items-center gap-2 text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight scroll-mt-24"
              >
                <span dangerouslySetInnerHTML={{ __html: renderInline(text) }} />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = id;
                    navigator.clipboard.writeText(window.location.href);
                    setCopiedHeadingId(id);
                    setTimeout(() => setCopiedHeadingId(null), 1500);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground transition-opacity p-0.5"
                  aria-label="Copy section link"
                  title="Copy link to section"
                >
                  {copiedHeadingId === id ? (
                    <CheckIcon size={16} className="text-emerald-400" />
                  ) : (
                    <LinkIcon size={16} />
                  )}
                </button>
              </h2>
            </div>
          );
        } else if (level === 3) {
          parsedBlocks.push(
            <h3
              key={`h3-${i}`}
              id={id}
              className={`${topPadH3} ${botPadH3} text-lg sm:text-xl font-serif font-light text-foreground tracking-tight scroll-mt-24 text-left`}
            >
              <span dangerouslySetInnerHTML={{ __html: renderInline(text) }} />
            </h3>
          );
        } else if (level === 4) {
          parsedBlocks.push(
            <h4
              key={`h4-${i}`}
              id={id}
              className={`${topPadH4} ${botPadH4} text-xs sm:text-sm font-sans font-medium text-foreground tracking-normal uppercase text-left`}
            >
              <span dangerouslySetInnerHTML={{ __html: renderInline(text) }} />
            </h4>
          );
        } else {
          const Tag = level === 5 ? 'h5' : 'h6';
          parsedBlocks.push(
            <Tag
              key={`h${level}-${i}`}
              id={id}
              className={`${topPadH56} ${botPadH56} text-xs font-sans font-medium text-muted-foreground tracking-wide uppercase text-left`}
            >
              <span dangerouslySetInnerHTML={{ __html: renderInline(text) }} />
            </Tag>
          );
        }
        i++;
        continue;
      }

      // Markdown Table
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const tableLines: string[] = [];
        while (i < rawLines.length && rawLines[i].trim().startsWith('|')) {
          tableLines.push(rawLines[i].trim());
          i++;
        }

        if (tableLines.length >= 2) {
          const headers = splitTableRow(tableLines[0]);
          const rows = tableLines.slice(2).map(splitTableRow);

          parsedBlocks.push(
            <div
              key={`table-${i}`}
              className="my-6 rounded-xl border border-border/60 bg-card/40 overflow-hidden text-sm font-sans overflow-x-auto shadow-sm"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/60 bg-muted/40">
                    {headers.map((h, hIdx) => (
                      <th
                        key={hIdx}
                        className="py-3 px-4 font-medium text-foreground text-xs uppercase tracking-wider"
                        dangerouslySetInnerHTML={{ __html: renderInline(h) }}
                      />
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="hover:bg-muted/20 transition-colors"
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="py-2.5 px-4 text-foreground/80 font-light"
                          dangerouslySetInnerHTML={{ __html: renderInline(cell) }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          continue;
        }
      }

      // Lists (- or * or 1.)
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const listItems: string[] = [];
        while (i < rawLines.length && (rawLines[i].trim().startsWith('- ') || rawLines[i].trim().startsWith('* '))) {
          listItems.push(rawLines[i].trim().slice(2));
          i++;
        }
        parsedBlocks.push(
          <ul key={`ul-${i}`} className="my-4 space-y-2 pl-5 list-disc list-outside text-left">
            {listItems.map((item, lIdx) => (
              <li
                key={lIdx}
                className="text-sm sm:text-base text-foreground/85 leading-relaxed font-light"
                dangerouslySetInnerHTML={{ __html: renderInline(item) }}
              />
            ))}
          </ul>
        );
        continue;
      }

      // Numbered List
      if (/^\d+\.\s+/.test(trimmed)) {
        const listItems: string[] = [];
        while (i < rawLines.length && /^\d+\.\s+/.test(rawLines[i].trim())) {
          listItems.push(rawLines[i].trim().replace(/^\d+\.\s+/, ''));
          i++;
        }
        parsedBlocks.push(
          <ol key={`ol-${i}`} className="my-4 space-y-2 pl-6 list-decimal list-outside text-left">
            {listItems.map((item, lIdx) => (
              <li
                key={lIdx}
                className="text-sm sm:text-base text-foreground/85 leading-relaxed font-light"
                dangerouslySetInnerHTML={{ __html: renderInline(item) }}
              />
            ))}
          </ol>
        );
        continue;
      }

      // Empty line
      if (!trimmed) {
        i++;
        continue;
      }

      // Paragraph
      parsedBlocks.push(
        <p
          key={`p-${i}`}
          className="my-4 text-sm sm:text-base leading-relaxed font-light text-foreground/90 text-left"
          dangerouslySetInnerHTML={{ __html: renderInline(trimmed) }}
        />
      );
      i++;
    }

    return { blocks: parsedBlocks, headings: extractedHeadings };
  }, [doc.content, doc.title, doc.id, doc.slug, copiedCodeIdx, copiedHeadingId]);

  // Report extracted headings to parent outline
  useEffect(() => {
    onHeadingsExtracted?.(headings);
  }, [headings, onHeadingsExtracted]);

  const handleCopyPage = () => {
    navigator.clipboard.writeText(doc.content);
    setCopiedPage(true);
    setTimeout(() => setCopiedPage(false), 2000);
  };

  return (
    <article
      ref={articleRef}
      className="w-full min-w-0 text-left"
      onClick={handleContentClick}
      onMouseOver={handleContentMouseOver}
      onMouseOut={handleContentMouseOut}
    >
      {/* Top Document Header Bar (Retained with metadata pills, title & summary) */}
      <div className="space-y-4 border-b border-border/40 pb-6 mb-8 text-left">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Metadata pill badge */}
          <div className="inline-flex items-center gap-2 text-xs font-sans text-muted-foreground lowercase">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border/60 bg-muted/30">
              <ClockIcon size={12} className="text-muted-foreground shrink-0" />
              <span>{doc.lastUpdated || 'last updated 1 day ago'}</span>
            </span>
            {doc.readTime && (
              <>
                <span>·</span>
                <span>{doc.readTime}</span>
              </>
            )}
            {doc.license && (
              <>
                <span>·</span>
                <span className="uppercase text-[11px] px-2 py-0.5 rounded border border-border/40 bg-muted/20">
                  {doc.license}
                </span>
              </>
            )}
          </div>

          {/* Quick Copy Page action */}
          <button
            type="button"
            onClick={handleCopyPage}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1 rounded-md border border-border/50 hover:bg-muted/40 transition-colors cursor-pointer"
            title="Copy document markdown to clipboard"
          >
            {copiedPage ? (
              <>
                <CheckIcon size={13} className="text-emerald-500" />
                <span className="text-emerald-500 font-medium">copied</span>
              </>
            ) : (
              <>
                <CopyIcon size={13} />
                <span>copy page</span>
              </>
            )}
          </button>
        </div>

        {/* Dynamic Title and Summary */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-foreground font-sans lowercase">
          {doc.title}
        </h1>
        {doc.summary && (
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            {doc.summary}
          </p>
        )}
      </div>

      {/* Rendered Markdown Blocks (Clean prose without raw frontmatter) */}
      <div ref={contentContainerRef} className="space-y-1">
        {blocks}
      </div>

      {/* Sequential Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevDoc ? (
          <button
            type="button"
            onClick={() => onSelectDoc(prevDoc)}
            className="flex flex-col items-start p-4 rounded-xl border border-border/50 hover:border-foreground/30 hover:bg-muted/20 transition-all text-left cursor-pointer group"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground mb-1 group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeftIcon size={12} />
              <span>previous</span>
            </span>
            <span className="text-sm font-medium text-foreground lowercase">
              {prevDoc.title}
            </span>
          </button>
        ) : <div />}

        {nextDoc && (
          <button
            type="button"
            onClick={() => onSelectDoc(nextDoc)}
            className="flex flex-col items-end p-4 rounded-xl border border-border/50 hover:border-foreground/30 hover:bg-muted/20 transition-all text-right cursor-pointer group"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground mb-1 group-hover:translate-x-0.5 transition-transform">
              <span>next</span>
              <ArrowRightIcon size={12} />
            </span>
            <span className="text-sm font-medium text-foreground lowercase">
              {nextDoc.title}
            </span>
          </button>
        )}
      </div>

      {/* Floating Wikilink Hover Preview Popover */}
      {hoverPreview && (
        <WikilinkHoverPreview
          targetDoc={hoverPreview.targetDoc}
          targetTitle={hoverPreview.targetTitle}
          anchorRect={hoverPreview.anchorRect}
          onSelectDoc={onSelectDoc}
          onClose={handleCloseHoverPreview}
          onMouseEnter={handleMouseEnterPreview}
          onMouseLeave={handleMouseLeavePreview}
        />
      )}
    </article>
  );
});
