import React, { useRef, useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from 'next/link';
import HomeHero from "../../../public/assets/hero/Familia jugando en una plaza de Bariloche.webp"
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from '../../../styles/Home/HomeBooking.module.css'

function HomeBooking () {
  const iframeRef = useRef(null)
  const [mensaje, setMensaje] = useState("")
  const [iframeerror, setIframeerror] = useState(false)
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  
  useEffect(()=>{
    window.addEventListener("message", (e)=> {
      if(!e.data) console.log("no llega data")
      if(e.origin === " https://austral.rentlynetwork.com"){
        console.log("Mensaje recibido de rently:", e.data)
      }
      console.log(" Mensaje de iframe 2 e.data:", e.data) // si viene desde otro origen
      setMensaje(e.data)
    }, false)
  }, [])
  
  console.log("Mensaje:", mensaje)
  // extraer de message el height y asignarselo a un estado height del iframe 
 // window.parent.postMessage("Test comunicacion austral/rently funcionado")

  return (
  <section className={styles.section__container}>
    <div className={styles.header__img}>
      <h1>{t.title.split("\n").map((item, key) => {
        return <span key={key}>{item}<br/></span>
      })}</h1>
      <Image src ={HomeHero} sizes= " (max-width: 768px) 200vw, 100vw" placeholder='blur' alt="Familia jugando en una plaza de Bariloche" priority/>
    </div>

    {iframeerror ? 
      <div className={styles.error}>Error al cargar el iframe, comuniquese con austral al
      <Link href="https://wa.me/5492944242615" target={"_blank"}><p>+549 294 424 2615</p></Link></div> 
      :
    <iframe onError={() => setIframeerror(true)}
     className={styles.booking__all_container} ref={iframeRef} src="https://austral.rentlynetwork.com/widget"  frameBorder="0" title="Rently Widget"></iframe> 
    }
  </section>
  );
}
 
export default HomeBooking;



  














