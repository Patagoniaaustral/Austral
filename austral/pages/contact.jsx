
import ContactUs from "../src-client/components/Contact"
import Head from 'next/head'
import React from "react";
import {motion} from "framer-motion"

export default function contact() {
  return (
    <>
     <Head>
       <title>Austral</title>
        <meta name="description" content="Contact" />
      </Head>   
      <motion.main exit={{color : 'white'}} 
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                transition={{duration: 0.5}}>  
        <ContactUs />
      </motion.main>  
    </>
  );
}