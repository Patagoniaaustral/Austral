import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomePage from "../src-client/components/Home/Home"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Austral </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Austral Rent A Car." />
        <meta name="austral" content="Austral Rent A Car" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="alquiler de autos, alquiler de autos en argentina,
         alquiler de autos bariloche, rent a car, rent a car bariloche, rent a car argentina"
        />
        <meta property="og:title" content="Austral Rent A Car" />
        <meta property="og:description" content="Austral Rent A Car" />
        <meta property="og:url" content="https://www.australrentacar.com.ar/" />
        <link rel="canonical" href="https://www.australrentacar.com.ar/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HomePage />
      </main>
    </>
  );
}
