import React, {useState, useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import HomeCar from "../../assets/home3.jpg"
import Hexa from "../../assets/hexBorder.svg"
import styles from "../../styles/Home/Slider.module.css"
import { motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';

function Slider () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  const { ref, inView} = useInView({threshold: 0.1}); 
  const animation = useAnimation()

  const prev = (id) => {
      setIndex(0)
  }

  const next = (id) => {
      setIndex(1)
 
  }

  
  useEffect(() => {
    if(inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition :{
          delay: 0.2,
          duration: 2,
          ease: "easeOut"
        } 
      })
      } else {
        animation.start({
          x: 1000,
          opacity: 0,
          transition :{
            duration: 2,
            ease: "easeOut" }
        })
      }
  }, [inView])

  const images = [ "/redcar.png", "/nissan.png"]
  const [index, setIndex] = useState(0)

  return (
    <section className={styles.section__container}>
      <Image src={Hexa} alt="hexagono1" width={100} height={100}/>
      <Image src={Hexa} alt="hexagono1" width={100} height={100} />
      <div className={styles.general__container}>
        <div ref={ref} className={styles.row__container}>
          <div className={styles.info__container}>
            <h2>{t.sliderfleet.ftitle}</h2>
            <p>{t.sliderfleet.ftext}</p>
            <Link href="/fleet">
              <button className={styles.btn}>{t.sliderfleet.fbtn}</button>
            </Link>
          </div>
          <motion.div className={styles.image__container} animate={animation}>
            <Image src={HomeCar} alt="" width={1300} height={400} />
          </motion.div>
        </div>
          <div>
             <Image  className={styles.slider__image} src={require(`../../assets${images[index]}`)} alt="cars" width={600} height={350} />   
          </div>
            <div className={styles.slider__btns}>
              <button onClick={prev}></button>
              <button onClick={next}></button>
            </div>
          </div>
    </section>
  );
}

export default Slider;




