import { useState, useEffect } from 'react';

export const useFlicker = (
    enabled: boolean,
    minDelay: number,
    maxDelay: number
) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFlickering, setIsFlickering] = useState(false);

    useEffect(() => {
        if (enabled) {
            const flickerEffect = () => {
                setIsFlickering(true);
                setIsVisible(false);
                
                // Quick timeout to turn it back on
                setTimeout(() => {
                    setIsVisible(true);
                    // Small delay before removing flicker effect
                    setTimeout(() => setIsFlickering(false), 50);
                }, 50);
            };

            const flickerInterval = setInterval(
                flickerEffect,
                Math.random() * (maxDelay - minDelay) + minDelay
            );

            return () => clearInterval(flickerInterval);
        }
    }, [enabled, minDelay, maxDelay]);

    return { isVisible, isFlickering };
};