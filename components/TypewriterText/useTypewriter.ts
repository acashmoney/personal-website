import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, typingSpeed: number) => {
    const [displayText, setDisplayText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const isComplete = typingIndex === text.length;

    useEffect(() => {
        if (!isComplete) {
            const typingTimer = setTimeout(() => {
                setDisplayText(prevText => prevText + text[typingIndex]);
                setTypingIndex(prevIndex => prevIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(typingTimer);
        } else {
            // After typing is complete, wait 3 seconds and reset
            const resetTimer = setTimeout(() => {
                setDisplayText("");
                setTypingIndex(0);
            }, 7000); // 3 seconds delay before reset

            return () => clearTimeout(resetTimer);
        }
    }, [typingIndex, text, typingSpeed, isComplete]);

    return { displayText, isComplete };
};