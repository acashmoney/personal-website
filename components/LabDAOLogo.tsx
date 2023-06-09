import { useState } from 'react';

interface LabDAOLogoProps {
  className?: string;
}

const LabDAOLogo: React.FC<LabDAOLogoProps> = ({ className }) => {
  const [hovered, setHovered] = useState(false);

  const fillColor = hovered ? '#6bdaad' : '#B7C0C7';

  return (
    <svg
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`transition-fill duration-500 ${className}`}
      style={{ fill: fillColor }}
      width="30"
      height="30"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path
        d="M145,250l-72.5-72.5c8.4-0.5,43.5-3.4,72.6-32.5c29-29,31.9-64.1,32.4-72.5c12.4,12.1,24.8,24.2,37.3,36.2
        c12.6,12.1,25.2,24.2,37.3,36.2c-8.3,0.4-44.8,2.9-74.7,32.9C148.8,206.7,145.6,241.3,145,250z"
        />
        <path
        d="M250,0c-40,0-72.5,32.5-72.5,72.5c-0.5,8.4,2.9,49.8-26.1,78.9c-29,29.1-70.4,25.6-78.9,26.1
        C32.5,177.5,0,210,0,250s32.5,72.5,72.5,72.5S145,290,145,250c0.5-8.4-0.7-48.2,28.4-77.3c29.1-29,68.3-27.3,76.6-27.7
        c40,0,72.5-32.5,72.5-72.5S290,0,250,0z"
        />
        <path
        d="M250.1,500.1c40,0,72.5-32.5,72.5-72.5c0.5-8.4-2.9-49.8,26.1-78.9c29-29.1,70.4-25.6,78.9-26.1
        c40,0,72.5-32.5,72.5-72.5s-32.5-72.5-72.5-72.5s-72.5,32.5-72.5,72.5c-0.5,8.4,0.9,47.8-28.1,76.9c-29.1,29-68.5,27.7-76.9,28.1
        c-40,0-72.5,32.5-72.5,72.5S210,500.1,250.1,500.1z"
        />
        <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -39.8661 96.2399)" cx="96.2" cy="96.2" rx="54.5" ry="36.1"/>
        <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -167.2461 403.7624)" cx="403.8" cy="403.8" rx="54.5" ry="36.1"/>
        <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 50.2052 313.6911)" cx="403.8" cy="96.2" rx="36.1" ry="54.5"/>
        <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -257.3147 186.31)" cx="96.2" cy="403.8" rx="36.1" ry="54.5"/>
        <circle cx="250" cy="250" r="72.5"/>
    </svg>
  );
};

export default LabDAOLogo;
