import HomeBooking from "./HomeBooking"
import Experiences  from "./Experiences"
import Slider from "./Slider"
import React from 'react'
import { useRouter } from "next/router";
import {motion} from 'framer-motion'
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import Image from 'next/image'
import HomeRoute from '../../assets/home4.jpg'
import styles from "../../../styles/Home/Home.module.css"

function Home () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  return (
    <div className={styles.main} >
     <HomeBooking/>
     <Slider/>
     <section className={styles.section__container}>  
      <motion.div initial={{x: -1000, opacity: 0}}
                    animate = {{x: 0, opacity: 1}} 
                    transition={{delay: 1, duration: 2, ease : "easeOut"}}
                    onScroll={{opacity: 1}} 
                    onScrollCapture={{opacity: 1}}
                    layoutScroll={{opacity: 1}} >
        <Image src={HomeRoute} alt="ruta hacia el horizonte" width={250} height={500} />
      </motion.div>
      <div>
        <h2>{t.about.atitle}</h2>
        <p>{t.about.atext} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, officiis! Eius adipisci tempora nobis, amet reprehenderit, vitae, culpa aspernatur sed minima nemo autem? Libero earum alias dignissimos cum repellat esse ea error non dolorem assumenda. Illum, cumque sapiente dicta vero, in quis fuga amet enim ab magnam aliquam, distinctio reiciendis.</p>
        <div> 
          <h3>1980</h3>
          <div className={styles.line}></div>
          <h3>2023</h3>
        </ div>
      </div>
    </section>
     <Experiences/>
    </div>
  )
}

export default Home;

