import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Home: React.FC = () => {

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow" style={{ height: '70%' }}>
          <ParticleBackground>
            <main className="pb-10 mt-5 ml-10">
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
          </ParticleBackground>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
