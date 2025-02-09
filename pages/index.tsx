import React, { useState, useEffect } from 'react';
import { CRTTerminal } from '../components/CRTTerminal';
import { TypewriterText } from '../components/TypewriterText';
import { useTypewriter } from '../components/TypewriterText/useTypewriter';

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<number[]>([]);
  const initText = "initializing...";
  const { isComplete } = useTypewriter({ 
    text: initText, 
    typingSpeed: 100,
    shouldReset: true 
  });

  const contentLines = [
    "focus areas:",
    "AI safety and alignment",
    "biomedical research",
  ];

  // For debugging
  useEffect(() => {
    console.log('Current line:', currentLine);
    console.log('Completed lines:', completedLines);
  }, [currentLine, completedLines]);

  // Show content after initialization completes and a brief delay
  React.useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  // Handle line completion
  const handleLineComplete = () => {
    console.log('Line completed:', currentLine); // Debug log
    if (currentLine < contentLines.length - 1) {
      setCompletedLines(prev => {
        const newCompleted = [...prev, currentLine];
        console.log('New completed lines:', newCompleted); // Debug log
        return newCompleted;
      });
      
      setTimeout(() => {
        setCurrentLine(prev => {
          const newLine = prev + 1;
          console.log('Setting new current line:', newLine); // Debug log
          return newLine;
        });
      }, 1500);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-y-auto">
      <CRTTerminal
        text={showContent ? "" : initText}
        typingSpeed={100}
        minFlickerDelay={500}
        maxFlickerDelay={2000}
        scanLineSize={2}
        staticOpacity={0.1}
        rgbOffset={3}
        showCursor={true}
      />
      {showContent && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6">
          {contentLines.map((line, index) => (
            <div 
              key={line} 
              className={`h-8 ${index === 0 ? 'text-2xl' : index === 1 ? 'text-xl' : 'text-sm'}`}
            >
              {(index === currentLine || completedLines.includes(index)) && (
                <TypewriterText
                  text={line}
                  typingSpeed={100}
                  minFlickerDelay={3000}
                  maxFlickerDelay={6000}
                  onComplete={index === currentLine ? handleLineComplete : undefined}
                  shouldReset={false}
                  showCursor={false}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;