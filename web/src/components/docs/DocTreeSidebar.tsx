import React, { useState, useMemo, useEffect } from 'react';
import { MagnifyingGlassIcon, XIcon } from './Icons.tsx';
import type { DocCategory, DocItem } from '../../data/docsContent.ts';

export interface DocTreeSidebarProps {
  categories: DocCategory[];
  activeDocId: string;
  onSelectDoc: (doc: DocItem) => void;
  className?: string;
  onClose?: () => void;
}

export const DocTreeSidebar: React.FC<DocTreeSidebarProps> = React.memo(({
  categories,
  activeDocId,
  onSelectDoc,
  className = '',
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Track open/collapsed state of categories (defaults to all open)
  const [openCategoryIds, setOpenCategoryIds] = useState<Set<string>>(() => {
    return new Set(categories.map((c) => c.id));
  });

  // Ensure category containing active doc is automatically opened
  useEffect(() => {
    const parentCat = categories.find((c) =>
      c.items.some((i) => i.id === activeDocId || i.slug === activeDocId)
    );
    if (parentCat) {
      setOpenCategoryIds((prev) => {
        if (!prev.has(parentCat.id)) {
          const next = new Set(prev);
          next.add(parentCat.id);
          return next;
        }
        return prev;
      });
    }
  }, [activeDocId, categories]);

  const toggleCategory = (catId: string) => {
    setOpenCategoryIds((prev) => {
      const next = new Set(prev);
      if (next.has(catId)) {
        next.delete(catId);
      } else {
        next.add(catId);
      }
      return next;
    });
  };

  // Filter categories and docs based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase().trim();

    return categories
      .map((cat) => {
        const matchingItems = cat.items.filter((item) => {
          return (
            item.title.toLowerCase().includes(query) ||
            item.slug.toLowerCase().includes(query) ||
            (item.summary && item.summary.toLowerCase().includes(query)) ||
            (item.content && item.content.toLowerCase().includes(query))
          );
        });
        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [categories, searchQuery]);

  const totalMatches = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <aside className={`flex flex-col w-full text-left sidebar-container select-none ${className}`}>
      {/* Search Input Bar */}
      <div className="pb-4">
        <div className="relative flex items-center w-full">
          <MagnifyingGlassIcon
            size={14}
            className="absolute left-3 text-muted-foreground pointer-events-none shrink-0"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documentation..."
            className="w-full h-9 pl-9 pr-8 bg-card/60 dark:bg-card/40 border border-border/60 rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground outline-none focus:border-ring transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-2.5 p-0.5 rounded text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <XIcon size={12} />
            </button>
          )}
        </div>
        {searchQuery && (
          <div className="text-[11px] font-sans text-muted-foreground mt-2 px-1">
            {totalMatches} {totalMatches === 1 ? 'match' : 'matches'} found
          </div>
        )}
      </div>

      {/* Categorized Documentation Tree with Noether-style vertical guidelines and collapsible sections */}
      <div className="flex-1 sidebar-hover-scrollbar overflow-y-auto overscroll-contain space-y-4 pr-2.5 pb-12">
        {filteredCategories.length === 0 ? (
          <div className="py-8 text-center text-xs text-muted-foreground font-sans">
            No matching documents found.
          </div>
        ) : (
          filteredCategories.map((cat) => {
            const isOpen = openCategoryIds.has(cat.id) || Boolean(searchQuery.trim());

            return (
              <div key={cat.id} className="space-y-1">
                {/* Collapsible Category Section Header with Chevron */}
                <div
                  onClick={() => toggleCategory(cat.id)}
                  className="group flex items-center justify-between px-1 py-1 rounded-md cursor-pointer select-none text-[11px] font-sans font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-3.5 h-3.5 flex items-center justify-center text-muted-foreground/70 group-hover:text-foreground shrink-0 transition-transform">
                      <svg
                        viewBox="0 0 24 24"
                        width="11"
                        height="11"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-150 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </span>
                    <span className="truncate">{cat.name}</span>
                  </div>
                  <span className="text-[10px] font-sans text-muted-foreground/50 shrink-0 px-1">
                    {cat.items.length}
                  </span>
                </div>

                {/* Continuous Vertical Tree Guideline Rail */}
                {isOpen && (
                  <ul className="relative flex flex-col border-l border-border/40 ml-[10px] pl-[14px] space-y-0.5 my-1 list-none p-0 m-0">
                    {cat.items.map((item) => {
                      const isActive = activeDocId === item.id || activeDocId === item.slug;

                      return (
                        <li key={item.id} className="relative">
                          <a
                            href={`#${item.slug}`}
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectDoc(item);
                              onClose?.();
                            }}
                            className={`group relative flex items-center py-1.5 px-2 rounded-md text-[13px] font-sans transition-colors text-left cursor-pointer no-underline ${
                              isActive
                                ? 'text-foreground font-medium'
                                : 'text-muted-foreground hover:text-foreground font-normal'
                            }`}
                          >
                            {/* Left vertical guideline rail indicator */}
                            <span
                              style={{
                                left: -15,
                                width: isActive ? 2 : 1,
                              }}
                              className={`absolute top-0 bottom-0 pointer-events-none transition-colors ${
                                isActive
                                  ? 'bg-foreground z-10'
                                  : 'bg-transparent group-hover:bg-muted-foreground/30 z-10'
                              }`}
                            />

                            <span className="truncate lowercase">{item.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
});

DocTreeSidebar.displayName = 'DocTreeSidebar';
