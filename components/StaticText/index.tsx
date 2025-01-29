import React from 'react';
import { crtStyles } from '../../styles/styles';

interface StaticTextProps {
    text: string;
    primaryColor?: string;
    className?: string;
}

export const StaticText: React.FC<StaticTextProps> = ({
    text,
    primaryColor = 'text-[#00FF41]',
    className = ''
}) => {
    const primaryGlow = '0, 255, 0';

    return (
        <div
            className={`font-mono ${primaryColor} transition-all duration-50 ease-in-out z-10 ${className || 'text-xl md:text-2xl'}`}
            style={{
                ...crtStyles.textGlow(primaryGlow),
                transitionProperty: 'color, text-shadow',
            }}
        >
            {text}
        </div>
    );
};