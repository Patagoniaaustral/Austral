import React from "react";
import Head from 'next/head'
import FleetPage from "../src-client/components/Fleet"


export default function fleet() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="description" content="cars fleet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
  
      <main >
          <FleetPage/>
      </main>
 
    </>
  );
}