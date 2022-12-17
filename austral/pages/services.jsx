import React from "react";
import Head from 'next/head'
import Services from "../src-client/components/Services"
import styles from '../styles/Home.module.css'

export default function service() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="description" content="services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main className={styles.main}>
        <Services/>
      </main>
    </>
  );
}