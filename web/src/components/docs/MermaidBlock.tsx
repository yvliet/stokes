import React, { useEffect, useState, useId } from 'react';

export interface MermaidBlockProps {
  code: string;
}

let mermaidPromise: Promise<any> | null = null;

async function getMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          darkMode: true,
          background: 'transparent',
          mainBkg: 'transparent',
          nodeBorder: '#3a3a3a',
          nodeTextColor: '#ededed',
          clusterBkg: 'rgba(255, 255, 255, 0.02)',
          clusterBorder: '#3a3a3a',
          defaultLinkColor: '#8a8a8a',
          lineColor: '#8a8a8a',
          titleColor: '#ededed',
          edgeLabelBackground: 'rgba(30, 30, 30, 0.9)',
          primaryColor: 'transparent',
          primaryTextColor: '#ededed',
          primaryBorderColor: '#3a3a3a',
          secondaryColor: 'transparent',
          secondaryTextColor: '#ededed',
          secondaryBorderColor: '#333333',
          tertiaryColor: 'transparent',
          tertiaryTextColor: '#ededed',
          tertiaryBorderColor: '#2d2d2d',
          actorBkg: 'transparent',
          actorBorder: '#3a3a3a',
          actorTextColor: '#ededed',
          actorLineColor: '#3a3a3a',
          signalColor: '#8a8a8a',
          signalTextColor: '#ededed',
          labelBoxBkgColor: 'transparent',
          labelBoxBorderColor: '#3a3a3a',
          labelTextColor: '#ededed',
          loopTextColor: '#ededed',
          noteBorderColor: '#3a3a3a',
          noteBkgColor: 'rgba(255, 255, 255, 0.03)',
          noteTextColor: '#ededed',
          activationBorderColor: '#3a3a3a',
          activationBkgColor: 'rgba(255, 255, 255, 0.05)',
          sequenceNumberColor: '#8a8a8a',
          fontFamily: 'JetBrains Mono, Mona Sans, monospace, sans-serif',
          fontSize: '12px',
        },
        flowchart: {
          htmlLabels: true,
          curve: 'basis',
          padding: 15,
        },
        sequence: {
          useMaxWidth: true,
          mirrorActors: false,
        },
        look: 'classic',
        securityLevel: 'loose',
      });
      return mermaid;
    });
  }
  return mermaidPromise;
}

export const MermaidBlock: React.FC<MermaidBlockProps> = ({ code }) => {
  const [svgHtml, setSvgHtml] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, '');

  useEffect(() => {
    let isCancelled = false;
    const renderId = `mermaid-${reactId}-${Math.random().toString(36).slice(2, 7)}`;

    async function renderDiagram() {
      try {
        const mermaid = await getMermaid();
        const { svg } = await mermaid.render(renderId, code);
        const cleanSvg = svg
          .replace(/filter:\s*drop-shadow\([^)]+\);?/gi, '')
          .replace(/filter="url\(#[^"]*\)"/gi, '')
          .replace(/<filter[\s\S]*?<\/filter>/gi, '');
        if (!isCancelled) {
          setSvgHtml(cleanSvg);
          setError(null);
        }
      } catch (err: any) {
        if (!isCancelled) {
          setError(err?.message || 'Failed to render Mermaid diagram.');
        }
      } finally {
        const el = document.getElementById(renderId);
        if (el) el.remove();
        const dEl = document.getElementById(`d${renderId}`);
        if (dEl) dEl.remove();
      }
    }

    renderDiagram();

    return () => {
      isCancelled = true;
    };
  }, [code, reactId]);

  if (error) {
    return (
      <div className="my-4 rounded-xl border border-red-500/40 bg-red-950/20 p-4 text-xs font-mono text-red-400">
        <p className="font-semibold mb-1">Mermaid Syntax Error</p>
        <pre className="overflow-x-auto text-[11px] whitespace-pre-wrap">{error}</pre>
        <pre className="mt-2 text-muted-foreground opacity-60 text-[11px] overflow-x-auto">{code}</pre>
      </div>
    );
  }

  if (!svgHtml) {
    return (
      <div className="my-5 flex items-center justify-center p-8 rounded-xl border border-border/50 bg-[#101011] dark:bg-[#101011] text-xs font-mono text-muted-foreground animate-pulse">
        Rendering diagram SVG...
      </div>
    );
  }

  return (
    <div
      className="my-6 flex justify-center overflow-x-auto rounded-xl border border-border/50 bg-[#101011] dark:bg-[#101011] p-6 [&>svg]:max-w-full [&>svg]:h-auto [&_*]:!filter-none [&_*]:!shadow-none [&_*]:!drop-shadow-none"
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
};
