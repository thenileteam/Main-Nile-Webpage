// ScrollReveal.js
import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealComponent = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "20px",
      duration: 800,
      easing: "ease-in-out",
      opacity: 0,
      reset: true,
    });

    // Reveal elements in the component
    sr.reveal(ref.current, {
      translateY: "100px",
      opacity: 1,
      interval: 200,
    });

    return () => {
      sr.destroy();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default ScrollRevealComponent;
