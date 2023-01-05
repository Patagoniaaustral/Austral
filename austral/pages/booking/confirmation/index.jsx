import React from "react";
import Head from 'next/head'
import ConfirmationPage from "../../../src-client/components/Booking/Confirmation"


export default function confirmation() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="description" content="booking checkout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>   
      <main>
       <ConfirmationPage/>
      </main>
    </>
  );
}