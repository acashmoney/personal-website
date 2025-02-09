import React, { useState, useEffect } from 'react';
import { TypewriterProps } from '../../types/crt';
import { crtStyles } from '../../styles/styles';
import { useTypewriter } from './useTypewriter';
import { useFlicker } from './useFlicker';

export const TypewriterText: React.FC<TypewriterProps & { 
    onComplete?: () => void;
    shouldReset?: boolean;
    resetDelay?: number;
    showCursor?: boolean;
}> = ({
    text,
    typingSpeed = 100,
    minFlickerDelay = 500,
    maxFlickerDelay = 2500,
    primaryColor = 'text-green-500',
    flickerColor = 'text-green-300',
    onComplete,
    shouldReset = false,
    resetDelay = 7000,
    showCursor = true
}) => {
    const { displayText, isComplete } = useTypewriter({ 
        text, 
        typingSpeed, 
        shouldReset, 
        resetDelay 
    });
    const { isVisible, isFlickering } = useFlicker(isComplete, minFlickerDelay, maxFlickerDelay);

    // Add a flag to ensure onComplete only fires once
    const [hasCalledComplete, setHasCalledComplete] = useState(false);

    React.useEffect(() => {
        if (isComplete && onComplete && !hasCalledComplete) {
            setHasCalledComplete(true);
            onComplete();
        }
    }, [isComplete, onComplete, hasCalledComplete]);

    // Convert Tailwind colors to RGB values
    const primaryGlow = '0, 255, 0';  // Green
    const flickerGlow = '0, 255, 0';  // Same green, but could be different

    return (
        <div
            className={`font-mono text-xl md:text-2xl animate-subtle-pulse ${
                isVisible 
                    ? (isFlickering ? flickerColor : primaryColor)
                    : 'opacity-0'
            } transition-all duration-50 ease-in-out z-10`}
            style={{
                ...crtStyles.textGlow(isFlickering ? flickerGlow : primaryGlow),
                transitionProperty: 'opacity, color, text-shadow',
            }}
        >
            {displayText}
            {showCursor && <span>_</span>}
        </div>
    );
};