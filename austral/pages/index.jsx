import Head from 'next/head'
import Script from 'next/script'
import { Inter } from '@next/font/google'
import HomePage from "../src-client/components/Home"
import {motion} from 'framer-motion'



// export const config = {
//   unstable_runtimeJS: false,
// }

// const inter = Inter ({ 
//   subsets: ['latin'],
//   variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   display: 'swap', 
//  })


export default function Home() {
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
                transition={{duration: 0.5}} >
        <HomePage/>
      </motion.main>
    </>
  );
}



