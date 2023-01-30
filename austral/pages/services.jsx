import React from "react";
import Head from 'next/head'
import Services from "../src-client/components/Services"
import {motion} from "framer-motion"

export default function service() {
  return (
   <>
     <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>   
      <motion.main exit={{color : 'white'}} 
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                transition={{duration: 0.5}}>
        <Services/>
      </motion.main>
    </>
  );
}