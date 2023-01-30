import React from "react";
import Head from 'next/head'
import FleetPage from "../src-client/components/Fleet"
import {motion} from "framer-motion"


export default function fleet() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="cars fleet" />
      </Head>   
  
      <motion.main exit={{color : 'white'}} 
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                transition={{duration: 0.5}} >
          <FleetPage/>
      </motion.main>
 
    </>
  );
}






