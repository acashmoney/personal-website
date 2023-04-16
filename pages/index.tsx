import Head from 'next/head';
import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
	const [minMaxHue, setMinMaxHue] = useState({});

	return (
		<>
			<Head>
				<title>Aakaash</title>
				<meta name="description" content="am i dreaming...?" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-[#121212]">
				<NavBar minMaxHue={minMaxHue}/>
			</div>
			<div className="relative min-h-screen flex flex-col">
				<ParticleBackground
					className="absolute top-0 left-0 z-[-1] w-full h-full"
					navBarHeight={40}
					footerHeight={40}
				/>
				<div className="bg-[#121212]">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Home;
