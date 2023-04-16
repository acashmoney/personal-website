import React, { useRef, useEffect, useState } from 'react';
import type p5 from 'p5';
import type { Color } from 'p5';
import useWindowSize from '../hooks/useWindowSize';

interface ParticleBackgroundProps {
  className?: string;
  navBarHeight: number;
  footerHeight: number;
  onHueChange?: (minMaxHue: [number, number]) => void;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
	className, 
	navBarHeight, 
	footerHeight,
	onHueChange,
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const goldenRatio = 1.61803398875;
  const { width, height } = useWindowSize();
  const [minMaxHue, setMinMaxHue] = useState<[number, number] | null>(null);

  useEffect(() => {
    let p5Instance: p5;
    let colors: Color[] = [];
    let particles: Particle[] = [];

    let prevWindowWidth: number;
    let prevWindowHeight: number;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: Color;
      size: number;
      sizeAmplitude: number;
      sizeFrequency: number;
      sizePhase: number;
      targetHue: number;

      constructor(p: p5) {
        this.x = p.random(0, (1 - (1 / goldenRatio)) * p.width);
        this.y = p.random(0, (1 - (1 / goldenRatio)) * p.height);
        this.vx = p.randomGaussian(-0.5, 0.5);
        this.vy = p.randomGaussian(-0.5, 0.5);
        this.color = colors[p.floor(p.random(colors.length))];
        this.size = p.random(1, 5);
        this.sizeAmplitude = p.random(0.5, 5);
        this.sizeFrequency = p.random(0.005, 0.05);
        this.sizePhase = p.random(0, 2 * p.PI);
        this.targetHue = p.hue(this.color);
      }

      update(p: p5) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > p.width) this.vx *= -1;
        if (this.y < 0 || this.y > p.height) this.vy *= -1;
      }

      display(p: p5) {
        const size = this.size + this.sizeAmplitude * p.sin(p.frameCount * this.sizeFrequency + this.sizePhase);
        p.fill(this.color);
        p.ellipse(this.x, this.y, size, size);
      }

      updatePosition(p: p5, prevWidth: number, prevHeight: number) {
        this.x *= p.width / prevWidth;
        this.y *= p.height / prevHeight;
      }

      updateColor(p: p5) {
        const currentHue = p.hue(this.color);
        const newHue = p.lerp(currentHue, this.targetHue, 0.01);
        const saturation = p.saturation(this.color);
        const brightness = p.brightness(this.color);

        this.color = p.color(newHue, saturation, brightness);
      }
    }

    const generateColors = (p: p5) => {
      const baseHue = p.random(360);
      const numColors = p.random(3, 8);

	  for (let i = 0; i < numColors; i++) {
        const hue = (baseHue + p.random(-30, 30) + 360) % 360;
        const saturation = p.random(40, 100);
        const brightness = p.random(40, 100);
        colors.push(p.color(hue, saturation, brightness));
      }

	  const hues = colors.map((color) => p.hue(color));
	  const minHue = Math.min(...hues);
	  const maxHue = Math.max(...hues);

	  setMinMaxHue([minHue, maxHue]);

	  if (typeof onHueChange === 'function') {
		onHueChange([minHue, maxHue])
	  }
    };

    const generateParticles = (p: p5) => {
      const numParticles = p.random(1000, 5000);

      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(p));
      }
    };

    const loadP5 = async () => {
      const P5 = (await import('p5')).default;

      const sketch = (p: p5) => {
		p.setup = () => {
			if (canvasRef.current) {
			  const existingCanvas = canvasRef.current.querySelector("canvas");
			  if (existingCanvas) {
				existingCanvas.remove();
			  }
			  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current);
		  
			  p.colorMode(p.HSB, 360, 100, 100);
			  generateColors(p);
			  generateParticles(p);
			  prevWindowWidth = p.windowWidth;
			  prevWindowHeight = p.windowHeight;
			}
		  };
		  
		  
		  p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight);

			const newWidth = p.windowWidth;
			const newHeight = p.windowHeight;
		  
			for (const particle of particles) {
			  particle.updatePosition(p, prevWindowWidth, prevWindowHeight);
			}
		  
			prevWindowWidth = newWidth;
			prevWindowHeight = newHeight;
		  };

        p.draw = () => {
          p.background('#070707');
          p.noStroke();

          for (const particle of particles) {
            particle.update(p);
            particle.display(p);
          }
        };
      };

      if (canvasRef.current) {
        p5Instance = new P5(sketch, canvasRef.current);
      }
    };

    loadP5();

    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, []);

  return (
    <>
      <div
        ref={canvasRef}
        className={className}
        style={{
          width: width,
          height: `calc(${height}px - ${navBarHeight}px - ${footerHeight}px)`,
          zIndex: -1,
        }}
      />
    </>
  );  
};

export default ParticleBackground;
