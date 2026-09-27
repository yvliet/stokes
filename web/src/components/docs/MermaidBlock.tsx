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
        theme: 'dark',
        themeVariables: {
          darkMode: true,
          background: '#141414',
          primaryColor: '#242424',
          primaryTextColor: '#ededed',
          primaryBorderColor: '#3a3a3a',
          lineColor: '#7a7a7a',
          secondaryColor: '#1a1a1a',
          tertiaryColor: '#181818',
          fontFamily: 'JetBrains Mono, monospace, sans-serif',
          fontSize: '13px',
        },
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
        if (!isCancelled) {
          setSvgHtml(svg);
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
      <div className="my-5 flex items-center justify-center p-8 rounded-xl border border-border/40 bg-[#141414] text-xs font-mono text-muted-foreground animate-pulse">
        Rendering diagram SVG...
      </div>
    );
  }

  return (
    <div
      className="my-6 flex justify-center overflow-x-auto rounded-xl border border-border/50 bg-[#121212] p-5 shadow-sm [&>svg]:max-w-full [&>svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
};
