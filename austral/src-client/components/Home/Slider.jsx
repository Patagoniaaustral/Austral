import React, {useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import HomeCar from "../../assets/home3.jpg"
import RedCar from "../../assets/redcar.png"
import Nissan from "../../assets/nissan.png"
import Hexa from "../../assets/hexBorder.svg"
import styles from "../../../styles/Home/Slider.module.css"
import { motion } from "framer-motion"

function Slider () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  const images = [
    {
      id: 1,
      url: RedCar,
      alt: "Red Car",
    },
    {
      id: 2,
      url: Nissan,
      alt: "Nissan",
    },
  ];


  return (
    <section className={styles.section__container}>
        <Image src={Hexa} alt="hexagono1" width={100} height={100} />
        <Image src={Hexa} alt="hexagono1" width={100} height={100} />
      <div className={styles.general__container}>
      <div className={styles.row__container} >
        <div className={styles.info__container}>
          <h2>{t.sliderfleet.ftitle}</h2>
          <p>{t.sliderfleet.ftext}</p>
          <Link href="/fleet">
            <button className={styles.btn}>{t.sliderfleet.fbtn}</button>
          </Link>
        </div>
{/* --------------------- SLIDER ------------ */}
        <div className={styles.slider}>
          {/* {images.map((image) => (
            <div key={image.id} className={styles.image__container}>
              <Image src={image.url} alt={image.alt} width={600} height={350} />
            </div>
          ))}  */}
          <Image src={RedCar} alt="Red Car" width={600} height={350} />
        </div>
      


{/* -------------------- FIN SLIDER ------------  */}

        <motion.div className={styles.image__container}
                    initial={{x: 1000, opacity: 0}}
                    animate = {{x: 0, opacity: 1}} 
                    transition={{duration: 2, ease : "easeOut"}}
                    onScroll={{opacity: 1}} 
                    onScrollCapture={{opacity: 1}}
                    layoutScroll={{opacity: 1}} 
        >
          <Image src={HomeCar} alt="" width={1300} height={400}/>
        </motion.div>
      </div>

      <div>
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
      </div>
      </div>
        
      

    </section>
  );
}


export default Slider;
