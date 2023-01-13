import React from "react";
import Head from 'next/head'
import FleetPage from "../src-client/components/Fleet"
import axios from "axios";
import {motion} from "framer-motion"


export default function fleet() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="description" content="cars fleet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
  
      <motion.main exit={{color : 'white'}} 
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                transition={{duration: 0.5}} >
          {/* <FleetPage/> */}
      </motion.main>
 
    </>
  );
}

// export async function getStaticProps() {

//   const res = await axios.get("http://localhost:3000/api/getAllCars");
//   const data = await res.data;

//   return {
//     props: {
//       props : data
//     },
//   }
// }





