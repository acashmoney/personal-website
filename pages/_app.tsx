import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';
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
        <main className={`${inter.className} min-h-screen flex flex-col`}>
          <Component {...pageProps} />
        </main>
      </motion.div>
    </>
  );
}
