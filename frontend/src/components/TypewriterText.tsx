import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  loop?: boolean;         
}

export const TypewriterText = ({
  text,
  speed = 50,
  className = "",
  loop = false,          // ← NEW
}: TypewriterTextProps) => {

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (currentIndex === text.length && loop) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 5000); 
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, loop]);

  return (
    <span className={className}>
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};
