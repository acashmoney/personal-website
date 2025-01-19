export const crtStyles = {
    container: (scanLineSize: number = 2, rgbOffset: number = 3) => ({
      background: `
        linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
        linear-gradient(90deg, 
          rgba(255, 0, 0, 0.06), 
          rgba(0, 255, 0, 0.02), 
          rgba(0, 0, 255, 0.06)
        )
      `,
      backgroundSize: `100% ${scanLineSize}px, ${rgbOffset}px 100%`,
    }),
    textGlow: (color: string = '0, 255, 0') => ({
      textShadow: `
        0 0 5px rgba(${color}, 0.7),
        0 0 15px rgba(${color}, 0.5),
        0 0 25px rgba(${color}, 0.3)
      `,
    })
  };