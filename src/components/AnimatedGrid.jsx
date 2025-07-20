import React, { useMemo } from "react";

const AnimatedGrid = () => {
  const verticalLines = useMemo(
    () =>
      [...Array(40)].map((_, i) => ({
        key: `v-${i}`,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  const horizontalLines = useMemo(
    () =>
      [...Array(40)].map((_, i) => ({
        key: `h-${i}`,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          {/* Vertical Lines */}
          <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] opacity-20">
            {verticalLines.map(({ key, duration, delay }) => (
              <div
                key={key}
                className="relative h-full w-full border-r border-blue-500/10"
                style={{
                  animation: `gridPulse ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
          </div>

          {/* Horizontal Lines */}
          <div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)] opacity-20">
            {horizontalLines.map(({ key, duration, delay }) => (
              <div
                key={key}
                className="relative w-full h-full border-b border-blue-500/10"
                style={{
                  animation: `gridPulse ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGrid;
