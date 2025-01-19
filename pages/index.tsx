import React from 'react';
import { CRTTerminal } from '../components/CRTTerminal';

const Home = () => {
  return (
    <CRTTerminal
      text="initializing..."
      typingSpeed={100}
      minFlickerDelay={500}
      maxFlickerDelay={2000}
      scanLineSize={2}
      staticOpacity={0.1}
      rgbOffset={3}
    />
  );
};

export default Home;