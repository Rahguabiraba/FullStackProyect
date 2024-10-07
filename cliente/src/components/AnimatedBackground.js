import React from "react";

const AnimatedBackground = () => {
  return (
    <div class="relative w-full h-screen overflow-hidden bg-stone-900">
      <div class="absolute inset-0 flex justify-center items-center text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white z-10 animate-pulse">
          Innovación que ilumina el futuro.
        </h1>
      </div>
      <div class="absolute inset-0">
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              class="absolute transform animate-spinAround"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 4 + 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <div
                class="w-1 h-1 bg-fuchsia-400 rounded-full animate-spinSelf"
                style={{
                  animationDuration: `${Math.random() * 2 + 1}s`,
                }}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
