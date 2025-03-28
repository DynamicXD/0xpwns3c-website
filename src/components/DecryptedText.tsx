'use client';


import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  duration?: number;
  className?: string;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 100,
  duration = 1000,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [revealed, setRevealed] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let iterations = 0;
    const totalIterations = duration / speed;

    const scrambleText = () => {
      if (iterations < totalIterations) {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, i) =>
              char === " " || Math.random() < iterations / totalIterations
                ? text[i]
                : characters[Math.floor(Math.random() * characters.length)]
            )
            .join("")
        );
        iterations++;
        timeout = setTimeout(scrambleText, speed);
      } else {
        setDisplayText(text);
        setRevealed(true);
      }
    };

    scrambleText();
    return () => clearTimeout(timeout);
  }, [text, speed, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: revealed ? 1 : 0.7 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
};

export default DecryptedText;
