import React, {useEffect} from 'react'
import { useRouter } from "next/router";
import {motion, useAnimationControls} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from "../../../styles/Home/Experiences.module.css"
import Exp1 from "../../assets/exp1.jpg"
import Exp2 from "../../assets/exp2.jpg"
import Exp3 from "../../assets/exp3.jpg"
import Hexa from "../../assets/hexBorder.svg"

function Experiences () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  const controls1 = useAnimationControls()
  const controls2 = useAnimationControls()
  const controls3 = useAnimationControls()

  const images = [
    {
      id: 1,
      image: Exp3,
      alt: "vista desde el hotel",
      title: t.experience.esubtitle1,
      controls : controls1
    },
    {
      id: 2,
      image: Exp2,
      alt: "vista dese las montañas",
      title: t.experience.esubtitle2,
      controls : controls2
    },
    {
      id: 3,
      image: Exp1,
      alt: "restaurant en la montaña",
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
          x: 100,
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
      <Image src={Hexa} alt="hexagono1" width={100} height={100} />
      <Image src={Hexa} alt="hexagono1" width={50} height={50} />
      <h2>{t.experience.etitle}</h2>
      <p>{t.experience.etext}</p>

    <div  ref={ref} className={styles.experience__container}>
      {images.map((image, index) => (
        <div key={image.id} className={styles.exp__card}>
          <motion.div animate={image.controls} className={styles.image__container}> 
            <Image src={image.image} alt={image.alt} width={400} height={300} />
          </motion.div>
          <p>{image.title}</p>
        </div>
      ))}
    </div>
    </section>
  )
}


export default Experiences;



