import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aakaash</title>
        <meta name="description" content="am i dreaming...?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='pl-6 pt-10 pb-10'>
        <h1 className='flex text-6xl font-medium text-stone-200'>
          Yo.
          <br/>
          <br/>
        </h1>
        <h3 className='flex text-6xl font-medium text-stone-200'>
          Fancy seeing you here.
          <br/>
          <br/>
          Here you may find an assortment of intrigue.
          <br/>
          <br/>
          I don't know what this will become.
          <br/>
          <br/>
          Let's hope it stays fun.
          <br/>
          <br/>
          Cheers.
        </h3>
      </main>
    </div>
  )
}
