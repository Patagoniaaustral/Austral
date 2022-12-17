
import ContactUs from "../src-client/components/Contact"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";

export default function contact() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="description" content="Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main className={styles.main}>  
        <ContactUs />
      </main>  
    </>
  );
}