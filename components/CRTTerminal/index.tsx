import React from 'react';
import type { CRTTerminalProps } from './types';
import { CRTOverlay } from './CRTOverlay';
import { TypewriterText } from '../TypewriterText';
import { StaticText } from '../StaticText'
import { crtStyles } from '../../styles/styles';
import { CRTStatic } from './CRTStatic';

export const CRTTerminal: React.FC<CRTTerminalProps> = ({
    text,
    typingSpeed,
    minFlickerDelay,
    maxFlickerDelay,
    scanLineSize,
    staticOpacity,
    rgbOffset
}) => {
    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div className="absolute inset-0" style={crtStyles.container(scanLineSize, rgbOffset)}>
                {/* Upper left corner text - adjusted padding for mobile */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8">
                    <StaticText text="Aakaash.xyz" />
                </div>
                
                {/* Centered content - added padding for mobile */}
                <div className="flex flex-col items-center justify-center h-full px-4 md:px-0">
                    <TypewriterText 
                        text={text}
                        typingSpeed={typingSpeed}
                        minFlickerDelay={minFlickerDelay}
                        maxFlickerDelay={maxFlickerDelay}
                    />
                </div>
            </div>
            <CRTStatic opacity={staticOpacity} />
        </div>
    );
};