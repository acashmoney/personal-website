import React from 'react';
import { crtStyles } from '../../styles/styles';

interface StaticTextProps {
    text: string;
    primaryColor?: string;
    className?: string;
    size?: string;
}

export const StaticText: React.FC<StaticTextProps> = ({
    text,
    primaryColor = 'text-[#00FF41]',
    className = '',
    size = '2xl'
}) => {
    const primaryGlow = '0, 255, 0';
    const sizeClasses = {
        'sm': 'text-sm md:text-sm',
        'base': 'text-base md:text-base',
        'xl': 'text-xl md:text-xl',
        '2xl': 'text-xl md:text-2xl',
        '3xl': 'text-2xl md:text-3xl',
    };

    return (
        <div
            className={`font-mono ${primaryColor} transition-all duration-50 ease-in-out z-10 ${className || sizeClasses[size as keyof typeof sizeClasses]}`}
            style={{
                ...crtStyles.textGlow(primaryGlow),
                transitionProperty: 'color, text-shadow',
            }}
        >
            {text}
        </div>
    );
};