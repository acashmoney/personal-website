import Link from 'next/link';
import { useEffect, useState } from 'react';
import LabDAOLogo from './LabDAOLogo';

// interface NavBarProps {
//   minMaxHue: {
//     min?: number;
//     max?: number;
//   };
// }

const NavBar = () => {
  const [gradientStyle, setGradientStyle] = useState({});
  const [hover, setHover] = useState(false);

//   useEffect(() => {
//     if (minMaxHue.min !== undefined && minMaxHue.max !== undefined && hover) {
//       const gradient = `linear-gradient(to right, hsl(${minMaxHue.min}, 100%, 50%), hsl(${minMaxHue.max}, 100%, 50%))`;
//       setGradientStyle({
//         backgroundClip: 'text',
//         WebkitBackgroundClip: 'text',
//         WebkitTextFillColor: 'transparent',
//         backgroundImage: gradient,
//       });
//     } else {
//       setGradientStyle({});
//     }
//   }, [minMaxHue, hover]);

  return (
    <div>
      <nav className="flex justify-between items-center bg-[#121212] p-10 text-stone-200 navbar-transition">
        <div
          className="text-2xl font-bold"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h1 className="transition duration-500" style={gradientStyle}>
            <Link href="/">
              Aakaash
              <sup className="font-features sups text-lg font-light">
                .xyz
              </sup>
            </Link>
          </h1>
        </div>
        <Link href="https://labdao.xyz" >
          <LabDAOLogo />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
