
import TermsandConditions from "../src-client/components/TermsandConditions"
import Head from 'next/head'
import React from "react";
import {motion} from "framer-motion"

export default function terms() {
  return (
    <>
     <Head>
     <title>Alquiler de autos en Bariloche – Patagonia – Descubrí tu destino</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Austral es una empresa de Rent a Car en Bariloche, tenemos diferentes modelos de autos para realizar turismo, viajes, excursiones y escapadas de fin de semana en Bariloche y zona Andina. " />
      </Head>   
      <motion.main exit={{color : 'white'}} 
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                transition={{duration: 0.5}}>  
        <TermsandConditions />
      </motion.main>  
    </>
  );
}