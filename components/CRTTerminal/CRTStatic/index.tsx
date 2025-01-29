import React, { useEffect, useState } from 'react';

interface CRTStaticProps {
    opacity?: number;
}

export const CRTStatic: React.FC<CRTStaticProps> = ({ opacity = 0.85 }) => {
    const [seed, setSeed] = useState(Math.random() * 100);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeed(Math.random() * 100);
        }, 25); // Faster updates for more dynamic static
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`absolute inset-0 pointer-events-none`} style={{ opacity }}>
            <svg className="w-full h-full">
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"   // Higher frequency = finer grain static
                        numOctaves="3"        // More octaves for that TV static look
                        stitchTiles="stitch"
                        seed={seed}
                    />
                    <feColorMatrix
                        type="saturate"
                        values="0"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    );
};