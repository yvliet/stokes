import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
          window.scrollTo({ top: 0, behavior: 'instant' });
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
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Track active heading during scroll (Scrollspy)
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by position relative to top of viewport
          visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveHeadingId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: [0, 1.0],
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

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
    <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* Mobile Navigation Toggle Bar */}
      <div className="lg:hidden flex items-center justify-between pb-4 mb-6 border-b border-border/40">
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

      {/* Tri-Column Desktop Layout: Fixed Sidebar (Left), Expanded Reading Canvas (Center), Fixed TOC (Right) */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-start">
        {/* Left Fixed Sidebar */}
        <div className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-20 h-[calc(100vh-5.5rem)]">
          <DocTreeSidebar
            categories={DOCS_TREE}
            activeDocId={activeDoc.id}
            onSelectDoc={handleSelectDoc}
          />
        </div>

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
        <div className="hidden lg:block w-56 xl:w-64 shrink-0 sticky top-20 max-h-[calc(100vh-5.5rem)]">
          <OnThisPageOutline
            headings={headings}
            activeHeadingId={activeHeadingId}
            onSelectHeading={handleSelectHeading}
          />
        </div>
      </div>
    </div>
  );
};
