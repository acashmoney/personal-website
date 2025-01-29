import React from 'react';
import { CRTTerminal } from '../components/CRTTerminal';
import { FlickerText } from '../components/FlickerText';

const Chess = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <CRTTerminal
        text=""
        typingSpeed={100}
        minFlickerDelay={500}
        maxFlickerDelay={2000}
        scanLineSize={2}
        staticOpacity={0.1}
        rgbOffset={3}
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6">
        <FlickerText 
          text="uscf national master + marshall chess club member"
          minFlickerDelay={3000}
          maxFlickerDelay={10000}
          size="3xl"
        />
        <FlickerText 
          text="online wins"
          minFlickerDelay={3200}
          maxFlickerDelay={7000}
          size="2xl"
        />
        <a
          href="https://www.chess.com/game/live/5881184296" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FlickerText 
            text="hikaru nakamura (blitz world #1)"
            minFlickerDelay={3200}
            maxFlickerDelay={5000}
            size="lg"
          />
        </a>
        <a
          href="https://lichess.org/ooYTJGn5/black" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FlickerText 
            text="shakhriyar mamedyarov (classical world #5) - chess960"
            minFlickerDelay={3200}
            maxFlickerDelay={5000}
            size="lg"
          />
        </a>
        <div className="mt-4">
          <FlickerText 
            text="offline wins"
            minFlickerDelay={3200}
            maxFlickerDelay={7000}
            size="2xl"
          />
        </div>
        <a
          href="https://www.uschess.org/msa/XtblMain.php?202212044882"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FlickerText 
            text="marshall amateur champion (2022)"
            minFlickerDelay={3200}
            maxFlickerDelay={5000}
            size="lg"
          />
        </a>
        <a
          href="https://news.illinois.edu/four-kings-of-illini-chess-club-make-move-on-elite-stage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FlickerText 
            text="1st place tie: pan-american intercollegiate championship (2012)"
            minFlickerDelay={3200}
            maxFlickerDelay={5000}
            size="lg"
          />        
        </a>
      </div>
    </div>
  );
};

export default Chess;
