// SketchBackground.jsx
import React from "react";
import "./SketchBackground.css"; // We’ll create this next

export default function SketchBackground() {
  return (
    <div className="sketch-background">
      <svg className="sketch-icon sketch-hand" viewBox="0 0 100 100">
        <path
          d="M20,60 C30,20 70,20 80,60"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <svg className="sketch-icon sketch-laptop" viewBox="0 0 100 100">
        <rect
          x="20"
          y="30"
          width="60"
          height="40"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <line
          x1="20"
          y1="70"
          x2="80"
          y2="70"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
