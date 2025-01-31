import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 400 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

//   return <span>{displayText}</span>;

  return (
    <span>
      {displayText}
      <span style={{ animation: "blink 1s infinite" }}></span>
    </span>
  );
  
  
};

export default Typewriter;
