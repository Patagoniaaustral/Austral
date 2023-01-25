import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomePage from "../src-client/components/Home"
import {motion} from 'framer-motion'



export const config = {
  unstable_runtimeJS: false,
  amp : true
}

// const inter = Inter ({ 
//   subsets: ['latin'],
//   variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   display: 'swap', 
//  })


export default function Home() {
  return (
    <>
      <Head>
        <title>Austral </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Austral Rent A Car." />
        <meta name="austral" content="Austral Rent A Car" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="alquiler de autos, alquiler de autos en argentina,
         alquiler de autos bariloche, rent a car, rent a car bariloche, rent a car argentina"
        />
        <meta property="og:title" content="Austral Rent A Car" />
        <meta property="og:description" content="Austral Rent A Car" />
        <meta property="og:url" content="https://www.australrentacar.com.ar/" />
        {/* <link rel="canonical" href="https://www.australrentacar.com.ar/" /> */}
        <link rel="icon" href="/favicon.png" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;500;600;700;800&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> */}
      {/* <meta name="google-site-verification" content="GDZpDah58kjFg2Q5RBcgT48NdKk0DkwrQFHB_k8hZkc" /> */}
      </Head>
      <motion.main exit={{color : 'white'}} 
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                transition={{duration: 0.5}} >
        <HomePage />
      </motion.main>
    </>
  );
}



