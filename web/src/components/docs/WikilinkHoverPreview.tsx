import React, { useLayoutEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { DocItem } from '../../data/docsContent.ts';
import { LinkIcon, ArrowRightIcon } from './Icons.tsx';

export interface WikilinkHoverPreviewProps {
  targetDoc: DocItem | null;
  targetTitle: string;
  anchorRect: DOMRect;
  onSelectDoc: (doc: DocItem) => void;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

export const WikilinkHoverPreview: React.FC<WikilinkHoverPreviewProps> = React.memo(({
  targetDoc,
  targetTitle,
  anchorRect,
  onSelectDoc,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [placementStyle, setPlacementStyle] = useState<{
    top: string;
    bottom: string;
    left: string;
    maxHeight: string;
    isBelow: boolean;
  }>({
    top: '0px',
    bottom: 'auto',
    left: '0px',
    maxHeight: '320px',
    isBelow: true,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const popoverWidth = 380;
    const margin = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = anchorRect.left;
    if (left + popoverWidth > viewportWidth - 16) {
      left = Math.max(16, viewportWidth - 16 - popoverWidth);
    }
    if (left < 16) {
      left = 16;
    }

    const spaceBelow = viewportHeight - anchorRect.bottom - margin - 16;
    const spaceAbove = anchorRect.top - margin - 16;

    const isBelow = spaceBelow >= 180 || (spaceBelow >= spaceAbove && spaceBelow >= 100);

    if (isBelow) {
      setPlacementStyle({
        top: `${Math.round(anchorRect.bottom + margin)}px`,
        bottom: 'auto',
        left: `${left}px`,
        maxHeight: `${Math.min(340, Math.max(120, spaceBelow))}px`,
        isBelow: true,
      });
    } else {
      setPlacementStyle({
        top: 'auto',
        bottom: `${Math.round(viewportHeight - anchorRect.top + margin)}px`,
        left: `${left}px`,
        maxHeight: `${Math.min(340, Math.max(120, spaceAbove))}px`,
        isBelow: false,
      });
    }
  }, [anchorRect]);

  const handleOpenDoc = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onClose();
      if (targetDoc) {
        onSelectDoc(targetDoc);
      }
    },
    [targetDoc, onSelectDoc, onClose]
  );

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      ref={containerRef}
      data-wikilink-hover-preview="true"
      style={{
        position: 'fixed',
        top: placementStyle.top,
        bottom: placementStyle.bottom,
        left: placementStyle.left,
        maxHeight: placementStyle.maxHeight,
        zIndex: 9999,
      }}
      className="w-[360px] sm:w-[400px] rounded-xl border border-border/70 bg-[#161616]/95 backdrop-blur-md shadow-2xl p-4 flex flex-col pointer-events-auto text-left"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-border/40 text-[11px] font-sans text-muted-foreground">
        <span className="uppercase tracking-wider font-semibold text-primary/80">
          {targetDoc ? targetDoc.category : 'document'}
        </span>
        <span className="flex items-center gap-1 opacity-70">
          <LinkIcon size={11} />
          <span>internal link</span>
        </span>
      </div>

      <div className="flex-1 overflow-y-auto pr-1">
        <h4 className="text-sm font-semibold text-foreground tracking-tight mb-1.5 flex items-center gap-1.5">
          <span>{targetDoc ? targetDoc.title : targetTitle}</span>
        </h4>
        <p className="text-xs text-muted-foreground font-light leading-relaxed">
          {targetDoc?.summary || 'Reference document for cross-boundary systems verification.'}
        </p>
      </div>

      {targetDoc && (
        <button
          type="button"
          onClick={handleOpenDoc}
          className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between w-full text-xs font-medium text-foreground hover:text-primary transition-colors cursor-pointer group"
        >
          <span>Open document</span>
          <ArrowRightIcon size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </div>,
    document.body
  );
});
