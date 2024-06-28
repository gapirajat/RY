"use client"
import { useState, useEffect } from 'react';

function useTypewriter (words, typingSpeed = 150, pauseBetweenWords = 4000) {
    if (!words || words.length === 0) return ""; // Return empty string if words array is empty or not provided

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Typing effect
    useEffect(() => {
        if (index >= words.length) {
            setIndex(0); // Reset index if it goes out of bounds
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
          setTimeout(() => {
            setReverse(true);
            return;
          }, 1500);
 
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
            
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed]);


    return `${words[index]?.substring(0, subIndex) || ""}`;
};

export default useTypewriter;