import React from 'react';
import { crtStyles } from '../../styles/styles';

interface StaticTextProps {
    text: string;
    primaryColor?: string;
}

export const StaticText: React.FC<StaticTextProps> = ({
    text,
    primaryColor = 'text-green-500'
}) => {
    const primaryGlow = '0, 255, 0';

    return (
        <div
            className={`font-mono text-xl md:text-2xl ${primaryColor} transition-all duration-50 ease-in-out z-10`}
            style={{
                ...crtStyles.textGlow(primaryGlow),
                transitionProperty: 'color, text-shadow',
            }}
        >
            {text}
        </div>
    );
};