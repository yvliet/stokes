import React, { useState, useMemo, useEffect, useRef } from 'react';
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
import type { DocItem, TocHeading } from '../../data/docsContent.ts';
import { highlightCode } from './syntaxHighlighter.ts';

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

// Split markdown table rows while protecting escaped pipes and inline code
function splitTableRow(line: string): string[] {
  const parts: string[] = [];
  let current = '';
  let inCode = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '`') {
      inCode = !inCode;
      current += char;
    } else if (char === '|' && !inCode) {
      parts.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  parts.push(current.trim());

  // Drop leading/trailing empty cells if standard markdown table format `| a | b |`
  if (parts.length > 0 && parts[0] === '') parts.shift();
  if (parts.length > 0 && parts[parts.length - 1] === '') parts.pop();
  return parts;
}

// Render inline markdown tokens (bold, italic, code, links)
function renderInline(text: string): string {
  let escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Inline code `code`
  escaped = escaped.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded text-[0.875em] font-mono bg-muted/60 text-foreground border border-border/50">$1</code>');

  // Bold **text**
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-medium text-foreground">$1</strong>');

  // Italic *text*
  escaped = escaped.replace(/\*([^*]+)\*/g, '<em class="italic text-foreground/90">$1</em>');

  // Links [text](url)
  escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline underline-offset-2 text-black dark:text-white hover:opacity-80 font-normal transition-opacity">$1</a>');

  return escaped;
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
  const articleRef = useRef<HTMLElement>(null);

  // Parse document content into structured blocks
  const { blocks, headings } = useMemo(() => {
    const rawLines = doc.content.replace(/\r\n/g, '\n').split('\n');
    const extractedHeadings: TocHeading[] = [];
    const parsedBlocks: React.ReactNode[] = [];

    let i = 0;
    let codeIndexCounter = 0;

    while (i < rawLines.length) {
      const line = rawLines[i];
      const trimmed = line.trim();

      // Skip document top title H1 if it repeats doc.title
      if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
        i++;
        continue;
      }

      // Horizontal Rule
      if (trimmed === '---' || trimmed === '***') {
        parsedBlocks.push(
          <hr key={`hr-${i}`} className="border-t border-border/40 my-8" />
        );
        i++;
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
        const highlighted = highlightCode(rawCode, lang);
        const thisCodeIdx = codeIndexCounter++;

        parsedBlocks.push(
          <div
            key={`code-${i}`}
            className="my-5 rounded-xl border border-border/60 bg-[#191919] text-[#e0e0e0] overflow-hidden text-xs sm:text-[13px] font-mono shadow-sm"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#2d2d2d] bg-[#212121]">
              <span className="text-[11px] sm:text-xs text-[#9e9e9e] font-mono lowercase">
                {lang || 'text'}
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(rawCode);
                  setCopiedCodeIdx(thisCodeIdx);
                  setTimeout(() => setCopiedCodeIdx(null), 2000);
                }}
                className="flex items-center gap-1 text-[11px] sm:text-xs text-[#9e9e9e] hover:text-white px-2 py-0.5 rounded cursor-pointer transition-colors"
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
            <pre className="p-4 overflow-x-auto text-[13px] sm:text-sm leading-relaxed scrollbar-thin">
              <code dangerouslySetInnerHTML={{ __html: highlighted }} />
            </pre>
          </div>
        );
        continue;
      }

      // GitHub Callout > [!TYPE]
      if (trimmed.startsWith('> [!')) {
        const calloutMatch = trimmed.match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)$/i);
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
          } else if (type === 'CAUTION') {
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

      // Headings H2, H3, H4
      const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        const cleanText = text.replace(/[`*]/g, '');
        const id = slugify(cleanText);

        extractedHeadings.push({ id, text: cleanText, level });

        if (level === 2) {
          parsedBlocks.push(
            <div key={`h2-${i}`} className="pt-10 pb-2.5 border-b border-border/30 mb-4 text-left">
              <h2
                id={id}
                className="group flex items-center gap-2 text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight lowercase scroll-mt-24"
              >
                <span dangerouslySetInnerHTML={{ __html: renderInline(text) }} />
                <a
                  href={`#${id}`}
                  className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground transition-opacity"
                  aria-label="Permalink"
                >
                  <LinkIcon size={16} />
                </a>
              </h2>
            </div>
          );
        } else if (level === 3) {
          parsedBlocks.push(
            <h3
              key={`h3-${i}`}
              id={id}
              className="pt-7 pb-1.5 text-lg sm:text-xl font-serif font-light text-foreground tracking-tight lowercase scroll-mt-24 text-left"
            >
              <span dangerouslySetInnerHTML={{ __html: renderInline(text) }} />
            </h3>
          );
        } else {
          parsedBlocks.push(
            <h4
              key={`h4-${i}`}
              id={id}
              className="pt-4 pb-1 text-xs sm:text-sm font-sans font-medium text-foreground tracking-normal uppercase text-left"
            >
              {cleanText}
            </h4>
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
              className="my-6 rounded-xl border border-border/60 bg-card/40 overflow-hidden text-sm font-sans overflow-x-auto"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/60 bg-muted/40 text-foreground font-medium">
                    {headers.map((h, hIdx) => (
                      <th
                        key={hIdx}
                        className="py-3 px-4 font-sans text-xs uppercase tracking-wider text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: renderInline(h) }}
                      />
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="hover:bg-muted/20 transition-colors"
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="py-3 px-4 text-sm sm:text-base text-foreground/90 font-light"
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
  }, [doc.content, copiedCodeIdx]);

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
    <article ref={articleRef} className="w-full min-w-0 text-left">
      {/* Top Document Header Bar */}
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
          </div>

          {/* Copy page action button */}
          <button
            type="button"
            onClick={handleCopyPage}
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border/60 bg-card/60 hover:bg-accent text-xs font-sans text-foreground transition-colors cursor-pointer"
          >
            {copiedPage ? (
              <>
                <CheckIcon size={13} className="text-emerald-500" />
                <span className="text-emerald-500 font-medium">page copied</span>
              </>
            ) : (
              <>
                <CopyIcon size={13} className="text-muted-foreground" />
                <span>copy page</span>
              </>
            )}
          </button>
        </div>

        {/* Document Title */}
        <h1 className="text-3xl sm:text-4xl font-serif font-light text-foreground tracking-tight lowercase">
          {doc.title}
        </h1>

        {/* Lead summary paragraph if available */}
        {doc.summary && (
          <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-4xl lowercase">
            {doc.summary}
          </p>
        )}
      </div>

      {/* Main Document Content */}
      <div className="space-y-6 text-sm sm:text-base font-light text-foreground/90 leading-relaxed">
        {blocks}
      </div>

      {/* Bottom Prev / Next Navigation Cards */}
      <div className="mt-16 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevDoc ? (
          <a
            href={`#${prevDoc.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onSelectDoc(prevDoc);
            }}
            className="flex flex-col items-start p-4 rounded-xl border border-border/60 bg-card/40 hover:bg-accent/40 hover:border-border transition-all text-left group cursor-pointer no-underline"
          >
            <span className="flex items-center gap-1 text-xs font-sans text-muted-foreground group-hover:text-foreground">
              <ArrowLeftIcon size={12} />
              <span>previous</span>
            </span>
            <span className="mt-1 text-sm sm:text-base font-serif font-light text-foreground lowercase">
              {prevDoc.title}
            </span>
          </a>
        ) : (
          <div />
        )}

        {nextDoc ? (
          <a
            href={`#${nextDoc.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onSelectDoc(nextDoc);
            }}
            className="flex flex-col items-end p-4 rounded-xl border border-border/60 bg-card/40 hover:bg-accent/40 hover:border-border transition-all text-right group cursor-pointer ml-auto w-full sm:w-auto no-underline"
          >
            <span className="flex items-center gap-1 text-xs font-sans text-muted-foreground group-hover:text-foreground">
              <span>next</span>
              <ArrowRightIcon size={12} />
            </span>
            <span className="mt-1 text-sm sm:text-base font-serif font-light text-foreground lowercase">
              {nextDoc.title}
            </span>
          </a>
        ) : (
          <div />
        )}
      </div>
    </article>
  );
});

DocsReader.displayName = 'DocsReader';
