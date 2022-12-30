import Head from 'next/head'
import Booking from "../../src-client/components/Home/HomeBooking"
import styles from '../../styles/Home.module.css'

export default function booking() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="description" content="booking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main className={styles.main}>
        <Booking/>
      </main>
    </>
  );
}

