import React from 'react';
import { CRTOverlayProps } from '../../../types/crt';
import { crtStyles } from '../../../styles/styles';
import { CRTStatic } from '../CRTStatic';

export const CRTOverlay: React.FC<CRTOverlayProps & { children: React.ReactNode }> = ({
    scanLineSize = 10,
    staticOpacity = 0.1,
    rgbOffset = 3,
    children
}) => (
    <>
        {children}
        <div
            className="absolute inset-0 pointer-events-none"
            style={crtStyles.container(scanLineSize, rgbOffset)}
        />
        <CRTStatic opacity={staticOpacity} />
    </>
);
