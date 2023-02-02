import React, {useEffect} from 'react'
import { useRouter } from "next/router";
import {motion, useAnimationControls} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import Link from "next/link";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from "../../../styles/Home/Experiences.module.css"

import Exp3 from "../../../public/assets/others/Lago Gutierrez,, Bariloche, Argentina.webp"
import Exp2 from "../../../public/assets/others/Laguna Escondida, Circuito Chico, Bariloche, Argentina.webp"
import Exp1 from "../../../public/assets/others/Ventisquero Negro en el Parque Nacional Nahuel Huapi en Argentina.webp"
import Hexa from "../../../public/assets/svg/hexBorder.svg"

function Experiences () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  const controls1 = useAnimationControls()
  const controls2 = useAnimationControls()
  const controls3 = useAnimationControls()

  const images = [
    {
      id: 1,
      image: Exp1,
      alt: "Laguna Escondida, Circuito Chico, Bariloche, Argentina",
      title: t.experience.esubtitle1,
      controls : controls1
    },
    {
      id: 2,
      image: Exp2,
      alt: "Ventisquero Negro en el Parque Nacional Nahuel Huapi en Argentina",
      title: t.experience.esubtitle2,
      controls : controls2
    },
    {
      id: 3,
      image: Exp3,
      alt: "Lago Gutierrez,, Bariloche, Argentina",
      title: t.experience.esubtitle3,
      controls : controls3
    }
  ];
  
  const { ref, inView} = useInView({threshold: 0.1}); 

  useEffect(() => {
    if(inView) {
      images.map((image, index) => {
        image.controls.start({
          x: 0,
          opacity: 1,
          transition :{
            delay: index === 0 ? 0.2 : index === 1 ? 0.6 : 1,
            duration: 2,
            ease: "easeOut"
          }
        })
      })
    } else {
      images.map((image) => {
        image.controls.start({
          x: 99,
          opacity: 0,
          transition :{
            duration: 2,
            ease: "easeOut" }
        })
      })
    }
  }, [inView])
 
  return (
    <section className={styles.section__container}>
      <Image className={styles.hexa__first} src={Hexa} alt="icono de hexagono grande" width={100} height={100} />
      <Image  className={styles.hexa__second}src={Hexa} alt="icono de hexagono grande" width={60} height={60} />
      <h2 className={styles.section__title}>{t.experience.etitle}</h2>
      <p className={styles.section__text}>{t.experience.etext.split("\n").map((item, key) => {
      return <span key={key}>{item}<br/></span>
     })}</p>

    <div ref={ref} className={styles.experience__container}>
      {images.map((image) => (
        <Link href="">
        <div key={image.id} className={styles.experience__card}>
          <motion.div animate={image.controls} className={styles.experience__image}> 
            <Image src={image.image} alt={image.alt} width={500} height={500}  />
          </motion.div>
          <p className={styles.experience__text}>{image.title}</p>
        </div>
        </Link>
      ))}
    </div>
    </section>
  )
}


export default Experiences;



