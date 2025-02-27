import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = ({ darkMode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-10); // Keep only last 10 positions for smooth effect
      });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <>
      {/* Cursor Trail */}
      {trail.map((t, index) => (
        <div
          key={index}
          className={`cursor-trail ${darkMode ? "dark-mode" : "light-mode"}`}
          style={{
            left: `${t.x}px`,
            top: `${t.y}px`,
            opacity: 1 - index / 10, // Fades out over time
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
