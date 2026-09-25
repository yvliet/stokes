import React, { useEffect, useState } from 'react';

/**
 * PixelPrism: The standardized Stokes 4x4 Invariant Matrix centerpiece.
 * 4x4 touching square pixels (72px x 72px).
 * Looping diagonal wave animation transitioning between the normal bottom-right
 * gradient and a softer/lighter version of the gradient, then washing back.
 */
export const PixelPrism: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    const duration = 3600; // 3.6s continuous back-and-forth loop

    const loop = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const tau = (elapsed % duration) / duration; // 0 to 1
      setProgress(tau);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const size = 18; // 4 * 18 = 72px x 72px
  // 4x4 diagonal luminance gradient from bottom-right (d=0 -> 1.00) to top-left (d=6 -> 0.13)
  const normalOpacities = [1.00, 0.85, 0.70, 0.55, 0.40, 0.25, 0.13];

  // Helper smoothstep function for organic easing
  const smoothstep = (min: number, max: number, value: number) => {
    const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
  };

  return (
    <div 
      className="relative flex items-center justify-center select-none py-2"
    >
      <div className="relative">
        <svg 
          width="72" 
          height="72" 
          viewBox="0 0 72 72" 
          className="text-foreground"
          style={{ display: 'block' }}
        >
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 4 }).map((_, c) => {
              const d = (3 - r) + (3 - c); // 0 at bottom-right (3,3), 6 at top-left (0,0)
              const normalOpacity = normalOpacities[d];
              const lightOpacity = normalOpacity * 0.40; // Soft 40% lighter gradient state

              // Continuous back-and-forth wave with 0s rest pause:
              // 0.0 -> 0.5: Forward wave wash (normal -> lighter gradient)
              // 0.5 -> 1.0: Reverse wave wash (lighter -> normal gradient)
              // Next cycle begins immediately as soon as reverse finishes.
              const stagger = (d / 6) * 0.18;
              const forwardT = smoothstep(stagger, 0.32 + stagger, progress);
              const reverseT = smoothstep(0.50 + stagger, 0.82 + stagger, progress);
              
              const k = forwardT * (1 - reverseT); // 0 at normal gradient, 1 at peak light
              const currentOpacity = normalOpacity - (normalOpacity - lightOpacity) * k;

              return (
                <rect
                  key={`${r}-${c}`}
                  x={c * size}
                  y={r * size}
                  width={size}
                  height={size}
                  fill="currentColor"
                  fillOpacity={currentOpacity}
                />
              );
            })
          )}
        </svg>
      </div>
    </div>
  );
};
