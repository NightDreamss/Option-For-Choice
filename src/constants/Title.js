import React from "react";

const Title = ({ title, highlight, dot, normal, underline }) => {
  return dot ? (
    <h2 className="font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl">
      <span className="relative inline-block">
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-accent-700 lg:w-32 opacity-50 sm:block"
        >
          <defs>
            <pattern
              id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect
            fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
            width="52"
            height="24"
          ></rect>
        </svg>
        <span className="relative">{title || ""}</span>
      </span>
    </h2>
  ) : normal ? (
    <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
      {title || ""}
      <span className="text-blue-accent-700"> {highlight || ""}</span>
    </h2>
  ) : (
    underline && (
      <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
        <span className="mb-2">{title}</span>
        <div className="h-1 ml-auto duration-300 origin-left transform bg-blue-accent-700 scale-x-30"></div>
      </h2>
    )
  );
};

export default Title;
