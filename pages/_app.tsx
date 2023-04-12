import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import { Router } from 'next/router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <main className={`${inter.className} bg-transparent min-h-screen flex flex-col`}>
          <div className="bg-[#121212]">
            <NavBar />
          </div>
          <Component {...pageProps} />
          <div className="bg-[#121212]">
            <Footer />
          </div>
        </main>
      </motion.div>
    </>
  );
}
