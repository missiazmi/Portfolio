import React from "react";
import "./Bubble.scss"; // Your bubble CSS

const Bubbles = ({ count = 50 }) => {
  return (
    <div className="bubbles">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bubble" />
      ))}
    </div>
  );
};

export default Bubbles;
