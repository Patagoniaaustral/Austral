import React, {useEffect} from 'react'
import { useRouter } from "next/router";
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

import Link from 'next/link'
import { IconContext } from "react-icons";
import {BsInstagram, BsFacebook } from "react-icons/bs";

import HomeBooking from "./Home/HomeBooking"
import Experiences  from "./Home/Experiences"
import Slider from "./Home/Slider"

import homeEs from "../../public/locale/ES/home.json"
import homeEn from "../../public/locale/EN/home.json"
import styles from "../../styles/Home/Home.module.css"

function Home () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  // const { ref, inView} = useInView({threshold: 0.1}); 
  // const animation = useAnimation()
 

  // useEffect(() => {
  //   if(inView) {
  //   animation.start({
  //     x: 0,
  //     opacity: 1,
  //     transition :{
  //       delay: 0.2,
  //       duration: 2,
  //       ease: "easeOut"

  //     } 
  //   })
  //   } else {
  //     animation.start({
  //       x: -100,
  //       opacity: 0,
  //       transition :{
  //         duration: 2,
  //         ease: "easeOut" }
  //     })
  //   }
  // }, [inView])

  return (
    <div className={styles.main} >

      <div className={styles.icons}>
       <IconContext.Provider value={{ color: "#DD3131", size: "2em" }}>  
          <Link  href="https://www.instagram.com/australrentacar" target={"_blank"}><BsInstagram/></Link>
          <Link  href="https://www.facebook.com/australrentacar" target={"_blank"}><BsFacebook/></Link>
       </IconContext.Provider>
      </div>

     <HomeBooking/>
     <Slider/>
     
      {/* SECCION DE ABOUT */}
     <section className={styles.section__container}>  
        <h2 className={styles.section__title}>{t.about.atitle}</h2>
      <div className={styles.about}>
        <p className={styles.about__text}>{t.about.atext}</p>
        {/* <div className={styles.about__linetime}> 
          <h3>1980</h3>
          <div className={styles.about__line}></div>
          <h3>2023</h3>
        </ div> */}
      </div>
    </section>
     <Experiences/>
     <section>
      <h2 className={styles.section__title}>{t.faqs.title}</h2>
      <div className={styles.faqs}>
          <h3>{t.faqs.q1}</h3>
          <p>{t.faqs.a1}
          <Link href="https://www.patagoniaaustralrentacar.com.ar/reservar">{t.sliderfleet.fbtn}</Link> </p>

          <h3>{t.faqs.q2}</h3>
          <p>{t.faqs.a2}</p>

          <h3>{t.faqs.q3}</h3>
          <p>{t.faqs.a3}</p>
      
          <h3>{t.faqs.q4}</h3>
          <p>{t.faqs.a4}</p>
      
          <h3>{t.faqs.q5}</h3>
          <p>{t.faqs.a5}</p>
        
          <h3>{t.faqs.q6}</h3>
          <p>{t.faqs.a6}
          <Link href="/contact"> {t.sliderfleet.fbtn}</Link></p>
      </div>
     </section>
    </div>
  )
}

export default Home;

