export interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  minFlickerDelay?: number;
  maxFlickerDelay?: number;
  primaryColor?: string;
  flickerColor?: string;
}
  
export interface CRTOverlayProps {
  scanLineSize?: number;
  staticOpacity?: number;
  rgbOffset?: number;
}