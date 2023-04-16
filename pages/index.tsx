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
        <link rel="icon" href="/aakaash_xyz_favicon_64x64.png" />
      </Head>
      <div className="relative min-h-screen flex flex-col">
        <div className="bg-[#121212]">
          <NavBar minMaxHue={minMaxHue} />
        </div>
        <div className="relative flex-grow z-[-1]">
          <ParticleBackground
            navBarHeight={40}
            footerHeight={40}
            onHueChange={setMinMaxHue}
          />
          <main className="absolute top-0 pb-10" style={{ marginTop: "40px", marginLeft: "40px" }}>
            <div className="flex text-4xl md:text-6xl font-medium text-stone-200">
              If I told you that
              <br />
              a flower bloomed
              <br />
              in a dark room,
              <br />
              would you trust it?
              <br />
              <br />
              -Kendrick Lamar
            </div>
          </main>
        </div>
        {/* <div className="bg-[#121212]">
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default Home;
