import React, { useState, useEffect } from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

function RotatingDiv() {
  const [scrollY, setScrollY] = useState(0);

  // Update scrollY as the page scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Set the scrollY value as the page scrolls
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define conditions for Parallax attributes
  const rotateCondition = scrollY > 300 ? [0, 180] : [0, 360]; // Rotate based on scroll position
  const scaleCondition = scrollY > 300 ? [1, 2] : [1, 1.5]; // Scale up faster after scrollY > 300
  const opacityCondition = scrollY > 500 ? [1, 0] : [0, 1.5]; // Fade out after scrollY > 500

  const { ref } = useParallax({
    rotate: rotateCondition,
    startScroll: 0,
    endScroll: 1000,
    scale: scaleCondition,
    opacity: opacityCondition,
  });

  return (
    <div
      ref={ref}
      style={{
        background: "lightblue",
        height: "200px",
        width: "200px",
        margin: "50px auto",
        textAlign: "center",
        lineHeight: "200px",
        borderRadius: "10px",
        position: "fixed", // Keeps the div fixed while scrolling
        top: "50px", // Adjusted for visibility
      }}
    >
      Rotating!
    </div>
  );
}

function App() {
  return (
    <ParallaxProvider>
      <div style={{ height: "400vh", textAlign: "center" }}>
        <h1>Scroll Down</h1>
        {/* Rotating Element */}
        <RotatingDiv />
        <div
          style={{
            background: "lightcoral",
            height: "200px",
            width: "200px",
            margin: "50px auto",
            textAlign: "center",
            lineHeight: "200px",
            borderRadius: "10px",
          }}
        >
          Static Element
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
