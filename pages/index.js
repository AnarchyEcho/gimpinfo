import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GIMP Info</title>
        <meta name="description" content="Created by Echo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Names of the degens</h1>
        <h3>GIMFunFun</h3>
        <h3>emerald12 gim</h3>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/KodeAndre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Echo
        </a>
      </footer>
    </div>
  )
}
