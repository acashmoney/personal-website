import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { Router } from 'next/router'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <motion.div
        key={router.route}
        initial='initial'
        animate='animate'
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <div className='bg-[#121212]'>
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </div>
      </motion.div>
    </>
  )
}
