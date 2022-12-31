import React from "react";
import Head from 'next/head'
import CheckoutPage from "../../../src-client/components/Booking/CheckoutForm"


export default function checkout() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="description" content="booking checkout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main>
        <CheckoutPage/>
      </main>
    </>
  );
}

