import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import HomeHero from "../../../public/assets/hero/Familia jugando en una plaza de Bariloche.webp"
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from '../../../styles/Home/HomeBooking.module.css'

function HomeBooking () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
 
useEffect(()=>{
  const iframeWindow = document.querySelector('iframe').contentWindow;
  console.log(iframeWindow) 

}, [])


  return (
  <section className={styles.section__container}>

    <div className={styles.header__img}>
     <h1>{t.title.split("\n").map((item, key) => {
      return <span key={key}>{item}<br/></span>
     })}</h1>
        <Image src ={HomeHero} sizes= " (max-width: 768px) 200vw, 100vw" placeholder='blur' alt="Familia jugando en una plaza de Bariloche" priority/>
    </div>
    <iframe className={styles.booking__all_container} src="https://austral.rentlynetwork.com/widget"  frameBorder="0" title="Rently Widget"></iframe> 
    </section>
  );
}


export default HomeBooking;














