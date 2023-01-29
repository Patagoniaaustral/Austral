import React, {useEffect} from 'react'
import { useRouter } from "next/router";
import {motion, useAnimationControls} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from "../../../styles/Home/Experiences.module.css"

import Exp1 from "../../../public/assets/others/exp1.jpg"
import Exp2 from "../../../public/assets/others/exp2.jpg"
import Exp3 from "../../../public/assets/others/exp3.jpg"
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
      image: "https://res.cloudinary.com/de74ziogy/image/upload/f_auto,q_auto/v1675017824/exp1_nykqlt.jpg",
      alt: "vista de hotel de montaña",
      title: t.experience.esubtitle1,
      controls : controls1
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/de74ziogy/image/upload/f_auto,q_auto/v1675017822/exp2_d6fk5i.jpg",
      alt: "vista a paisaje de montaña",
      title: t.experience.esubtitle2,
      controls : controls2
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/de74ziogy/image/upload/f_auto,q_auto/v1675009567/grid_landscape_1_rapmug.webp",
      alt: "restaurant de montaña",
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
      <Image className={styles.hexa__first} src={Hexa} alt="icono de hexagono grande" width={100} height={100}  loading="lazy"/>
      <Image  className={styles.hexa__second}src={Hexa} alt="icono de hexagono grande" width={60} height={60} loading="lazy"/>
      <h2 className={styles.section__title}>{t.experience.etitle}</h2>
      <p className={styles.section__text}>{t.experience.etext}</p>

    <div ref={ref} className={styles.experience__container}>
      {images.map((image) => (
        <div key={image.id} className={styles.experience__card}>
          <motion.div animate={image.controls} className={styles.experience__image}> 
            <Image src={image.image} alt={image.alt} width={500} height={500} loading="lazy" />
          </motion.div>
          <p className={styles.experience__text}>{image.title}</p>
        </div>
      ))}
    </div>
    </section>
  )
}


export default Experiences;



