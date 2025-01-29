import React from 'react';
import { useFlicker } from '../TypewriterText/useFlicker';
import { crtStyles } from '../../styles/styles';

interface FlickerTextProps {
    text: string;
    minFlickerDelay?: number;
    maxFlickerDelay?: number;
    primaryColor?: string;
    flickerColor?: string;
    size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

const sizeClasses = {
    'sm': 'text-sm',
    'base': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
} as const;

export const FlickerText: React.FC<FlickerTextProps> = ({
    text,
    minFlickerDelay = 3000,
    maxFlickerDelay = 6000,
    primaryColor = 'text-[#00FF41]',
    flickerColor = 'text-[#7FFF00]',
    size = '2xl'
}) => {
    const { isVisible, isFlickering } = useFlicker(true, minFlickerDelay, maxFlickerDelay);
    const primaryGlow = '0, 255, 65';
    const flickerGlow = '127, 255, 0';

    return (
        <div
            className={`font-mono ${sizeClasses[size]} ${
                isVisible 
                    ? (isFlickering ? flickerColor : primaryColor)
                    : 'opacity-0'
            } transition-all duration-50 ease-in-out z-10`}
            style={{
                ...crtStyles.textGlow(isFlickering ? flickerGlow : primaryGlow),
                transitionProperty: 'opacity, color, text-shadow',
            }}
        >
            {text}
        </div>
    );
};
