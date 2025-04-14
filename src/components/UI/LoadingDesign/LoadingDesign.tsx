"use client";

import React from "react";

const LoadingDesign = () => {
  return (
    <div className="flex">
      <svg
        className="w-10 h-10 text-blue-500 animate-circular-spin"
        viewBox="22 22 44 44"
      >
        <circle
          className="circular-progress-path"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.6"
        />
      </svg>

      <style jsx>{`
        @keyframes circular-rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes circular-dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -15px;
          }
          100% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -125px;
          }
        }

        .animate-circular-spin {
          animation: circular-rotate 1.4s linear infinite;
          transform-origin: center;
        }

        .circular-progress-path {
          stroke: currentColor;
          stroke-linecap: round;
          animation: circular-dash 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingDesign;
