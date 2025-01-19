import React from 'react';
import { CRTOverlayProps } from '../../../types/crt';
import { crtStyles } from '../../../styles/styles';
import { CRTStatic } from '../CRTStatic';

export const CRTOverlay: React.FC<CRTOverlayProps> = ({
    scanLineSize = 2,
    staticOpacity = 0.1,
    rgbOffset = 3
}) => (
    <>
        <div
            className="absolute inset-0"
            style={crtStyles.container(scanLineSize, rgbOffset)}
        />
        <CRTStatic opacity={staticOpacity} />
    </>
);
