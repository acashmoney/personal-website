import { useState, useEffect } from 'react';

interface TypewriterOptions {
    text: string;
    typingSpeed: number;
    shouldReset?: boolean;
    resetDelay?: number;
}

export const useTypewriter = ({ 
    text, 
    typingSpeed, 
    shouldReset = false,
    resetDelay = 7000 
}: TypewriterOptions) => {
    const [displayText, setDisplayText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const [hasCompleted, setHasCompleted] = useState(false);
    const isTypingComplete = typingIndex === text.length;

    useEffect(() => {
        if (!isTypingComplete) {
            const typingTimer = setTimeout(() => {
                setDisplayText(prevText => prevText + text[typingIndex]);
                setTypingIndex(prevIndex => prevIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(typingTimer);
        } else if (shouldReset && !hasCompleted) {
            setHasCompleted(true);
            const resetTimer = setTimeout(() => {
                setDisplayText("");
                setTypingIndex(0);
                setHasCompleted(false);
            }, resetDelay);

            return () => clearTimeout(resetTimer);
        }
    }, [typingIndex, text, typingSpeed, isTypingComplete, shouldReset, resetDelay, hasCompleted]);

    return { displayText, isComplete: isTypingComplete };
};