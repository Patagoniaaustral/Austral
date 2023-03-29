import React, {useRef, useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import HomeHero from "../../../public/assets/hero/Familia jugando en una plaza de Bariloche.webp"
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from '../../../styles/Home/HomeBooking.module.css'

function HomeBooking () {
  const [height, setHeight] = useState("100%");
  const iframeRef = useRef(null);
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  
  const handleResize = () => {
//     let iframe = document.querySelector("#custom-iframe"); 

  

// window.addEventListener('message', function(e) { 

//    // message that was passed from iframe page 

//    let message = e.data; 

  

//    iframe.style.height = message.height + 'px'; 

//    iframe.style.width = message.width + 'px'; 

// }, false); 
    // para setear el alto del iframe acorde al contenido dinamico
  
    console.log(iframeRef.current.contentWindow, "content window") 
    // como el iframe es de otro dominio no se puede acceder a su contenido directamente
    //console.log(iframeRef.current.contentWindow.document, "document"); // DA UN ERROR DE CORS
    //console.log(iframeRef.current.postMessage) //da undefined
  }

  return (
  <section className={styles.section__container}>
    <div className={styles.header__img}>
      <h1>{t.title.split("\n").map((item, key) => {
        return <span key={key}>{item}<br/></span>
      })}</h1>
      <Image src ={HomeHero} sizes= " (max-width: 768px) 200vw, 100vw" placeholder='blur' alt="Familia jugando en una plaza de Bariloche" priority/>
    </div>
    <iframe  className={styles.booking__all_container} src="https://austral.rentlynetwork.com/widget"  ref={iframeRef} onLoad={handleResize} height={height} scrolling="no"  frameBorder="0" title="Rently Widget"></iframe> 
    {/* <iframe src="https://rently.rentlynetwork.com/widget" id="custom-iframe"></iframe>  */}
  </section>
  );
}

export default HomeBooking;


  














