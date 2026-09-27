import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { ListIcon, XIcon } from './Icons.tsx';
import {
  DOCS_TREE,
  flattenDocs,
  findDocBySlug,
  type DocItem,
  type TocHeading,
} from '../../data/docsContent.ts';
import { DocTreeSidebar } from './DocTreeSidebar.tsx';
import { DocsReader } from './DocsReader.tsx';
import { OnThisPageOutline } from './OnThisPageOutline.tsx';

export const DocsShell: React.FC = () => {
  const flattened = useMemo(() => flattenDocs(DOCS_TREE), []);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  // Determine initial document from window.location.hash or fallback to first doc
  const [activeDoc, setActiveDoc] = useState<DocItem>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#/, '').trim();
      if (hash) {
        const found = findDocBySlug(hash, DOCS_TREE);
        if (found) return found;
      }
    }
    return flattened[0];
  });

  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '').trim();
      if (hash) {
        // If hash matches a document slug
        const found = findDocBySlug(hash, DOCS_TREE);
        if (found && found.id !== activeDoc.id) {
          setActiveDoc(found);
          contentContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }

        // If hash matches a heading on the current document
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveHeadingId(hash);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeDoc.id]);

  // Handle selecting a document from the sidebar or prev/next buttons
  const handleSelectDoc = useCallback((doc: DocItem) => {
    setActiveDoc(doc);
    setIsMobileDrawerOpen(false);
    window.location.hash = doc.slug;
    contentContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Track active heading during scroll (Scrollspy)
  useEffect(() => {
    if (headings.length === 0 || !contentContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by position relative to top of container
          visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveHeadingId(visibleEntries[0].target.id);
        }
      },
      {
        root: contentContainerRef.current,
        rootMargin: '-40px 0px -60% 0px',
        threshold: [0, 1.0],
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, activeDoc.id]);

  const handleSelectHeading = useCallback((id: string) => {
    setActiveHeadingId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Update hash without triggering reload
      history.replaceState(null, '', `#${id}`);
    }
  }, []);

  // Calculate prev and next doc
  const currentIndex = flattened.findIndex((d) => d.id === activeDoc.id);
  const prevDoc = currentIndex > 0 ? flattened[currentIndex - 1] : null;
  const nextDoc = currentIndex >= 0 && currentIndex < flattened.length - 1 ? flattened[currentIndex + 1] : null;

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      {/* Mobile Navigation Toggle Bar */}
      <div className="lg:hidden flex items-center justify-between py-3 px-4 sm:px-6 border-b border-border/40 shrink-0">
        <button
          type="button"
          onClick={() => setIsMobileDrawerOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/60 bg-card/60 text-xs font-sans text-foreground cursor-pointer"
        >
          <ListIcon size={14} />
          <span>documentation index</span>
        </button>
        <span className="text-xs font-sans text-muted-foreground truncate max-w-[200px]">
          {activeDoc.title}
        </span>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-background border-r border-border/60 p-6 flex flex-col z-50 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-4">
              <span className="text-xs font-sans uppercase tracking-wider text-muted-foreground">
                documentation
              </span>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <XIcon size={16} />
              </button>
            </div>
            <DocTreeSidebar
              categories={DOCS_TREE}
              activeDocId={activeDoc.id}
              onSelectDoc={handleSelectDoc}
              onClose={() => setIsMobileDrawerOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Tri-Column Desktop Layout */}
      <div className="flex-1 flex min-h-0 overflow-hidden w-full">
        {/* Left Fixed Sidebar - Has its own independent scrollbar */}
        <div className="hidden lg:flex flex-col w-64 xl:w-72 2xl:w-80 shrink-0 h-full py-6 pl-4 sm:pl-6 lg:pl-8 pr-4 border-r border-border/40">
          <DocTreeSidebar
            categories={DOCS_TREE}
            activeDocId={activeDoc.id}
            onSelectDoc={handleSelectDoc}
          />
        </div>

        {/* Center Main Content + Right TOC Rail Container - Unified scrollbar directly at the rightmost edge */}
        <div
          ref={contentContainerRef}
          className="flex-1 h-full min-w-0 overflow-y-auto"
        >
          <div className="w-full max-w-[1440px] px-6 lg:px-10 xl:px-12 py-6 pb-24 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
            {/* Center Main Article */}
            <div className="flex-1 min-w-0">
              <DocsReader
                key={activeDoc.id}
                doc={activeDoc}
                prevDoc={prevDoc}
                nextDoc={nextDoc}
                onSelectDoc={handleSelectDoc}
                onHeadingsExtracted={setHeadings}
              />
            </div>

            {/* Right Sticky On This Page Rail */}
            <div className="hidden lg:block w-56 xl:w-64 shrink-0 sticky top-0 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <OnThisPageOutline
                headings={headings}
                activeHeadingId={activeHeadingId}
                onSelectHeading={handleSelectHeading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
