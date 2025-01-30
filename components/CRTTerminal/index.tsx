import Link from 'next/link';
import React from 'react';
import type { CRTTerminalProps } from './types';
import { CRTOverlay } from './CRTOverlay';
import { TypewriterText } from '../TypewriterText';
import { StaticText } from '../StaticText'
import { crtStyles } from '../../styles/styles';
import { CRTStatic } from './CRTStatic';
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { SiLichess } from 'react-icons/si'

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
            <CRTOverlay>
                <div className="absolute inset-0" style={crtStyles.container(scanLineSize, rgbOffset)}>
                    {/* Top bar with logo and social links */}
                    <div className="absolute top-4 w-full px-4 md:top-8 md:px-8 flex justify-between items-center z-10">
                        <div>
                            <StaticText text="Aakaash.xyz" />
                        </div>
                        <div className="flex gap-10">
                            <a 
                                href="https://github.com/acashmoney" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:opacity-80"
                            >
                                <FaGithub className="text-3xl text-[#00FF41] cursor-pointer transition-all duration-300 hover:text-[#7FFF00] filter drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]" />
                            </a>
                            <a 
                                href="https://x.com/AakaashMeduri" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:opacity-80"
                            >
                                <FaXTwitter className="text-3xl text-[#00FF41] cursor-pointer transition-all duration-300 hover:text-[#7FFF00] filter drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]" />
                            </a>
                            <Link 
                                href="/chess"
                                className="cursor-pointer hover:opacity-80"
                            >
                                <SiLichess className="text-3xl text-[#00FF41] cursor-pointer transition-all duration-300 hover:text-[#7FFF00] filter drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center h-full px-4 md:px-0">
                        {text && (
                            <TypewriterText 
                                text={text}
                                typingSpeed={typingSpeed}
                                minFlickerDelay={minFlickerDelay}
                                maxFlickerDelay={maxFlickerDelay}
                            />
                        )}
                    </div>
                </div>
                <CRTStatic opacity={staticOpacity} />
            </CRTOverlay>
        </div>
    );
};