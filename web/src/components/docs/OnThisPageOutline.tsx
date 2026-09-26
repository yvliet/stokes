import React from 'react';
import type { TocHeading } from '../../data/docsContent.ts';

export interface OnThisPageOutlineProps {
  headings: TocHeading[];
  activeHeadingId: string;
  onSelectHeading: (id: string) => void;
  className?: string;
}

export const OnThisPageOutline: React.FC<OnThisPageOutlineProps> = React.memo(({
  headings,
  activeHeadingId,
  onSelectHeading,
  className = '',
}) => {
  if (!headings || headings.length === 0) return null;

  return (
    <aside className={`flex flex-col text-left select-none ${className}`}>
      {/* Header */}
      <div className="text-[11px] font-sans font-medium text-muted-foreground uppercase tracking-wider mb-2.5 pb-2 border-b border-border/40">
        on this page
      </div>

      <nav className="flex-1 overflow-y-auto space-y-0.5 pr-2 sidebar-hover-scrollbar">
        {headings.map((heading) => {
          const isActive = activeHeadingId === heading.id;
          const indent = heading.level > 2 ? (heading.level - 2) * 14 + 4 : 0;

          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectHeading(heading.id);
              }}
              style={{ paddingLeft: `${indent}px` }}
              className={`group relative text-left text-[13px] font-sans py-1 pr-1 cursor-pointer leading-snug transition-colors no-underline block ${
                isActive
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground font-normal'
              }`}
            >
              {/* Nested indentation continuous vertical guidelines */}
              {heading.level > 2 &&
                Array.from({ length: heading.level - 2 }).map((_, idx) => (
                  <span
                    key={idx}
                    style={{ left: `${idx * 14 + 3}px` }}
                    className={`absolute top-0 bottom-0 pointer-events-none transition-colors ${
                      isActive && idx === heading.level - 3
                        ? 'bg-foreground w-[1.5px] z-10'
                        : 'bg-border/60 w-[1px]'
                    }`}
                  />
                ))}

              <span className="truncate lowercase block">{heading.text}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
});

OnThisPageOutline.displayName = 'OnThisPageOutline';
