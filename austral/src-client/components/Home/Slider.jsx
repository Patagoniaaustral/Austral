import React, {useState, useRef} from 'react'
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
import { motion} from "framer-motion"

function Slider () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;



  const images = ["/redcar.png", "/nissan.png" ]
  const [index, setIndex] = useState(0)


  const prev = () => {
    setIndex(0)
  }


  const next = () => {
    setIndex(1)
  }


  return (
    <section className={styles.section__container}>
      <Image src={Hexa} alt="hexagono1" width={100} height={100} priority />
      <Image src={Hexa} alt="hexagono1" width={100} height={100} priority/>
     
      <div className={styles.general__container}>
        <div className={styles.row__container}>
          <div className={styles.info__container}>
            <h2>{t.sliderfleet.ftitle}</h2>
            <p>{t.sliderfleet.ftext}</p>
            <Link href="/fleet">
              <button className={styles.btn}>{t.sliderfleet.fbtn}</button>
            </Link>
          </div>
          <motion.div
            className={styles.image__container}
            initial={{ x: 1000, opacity: 0 }}
            whileInView={"onscreen"}
            viewport = {{once:false, amount: 1}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
           
          >
            <Image src={HomeCar} alt="" width={1300} height={400} />
          </motion.div>
        </div>

          <div>
            <Image  className={styles.slider__image} src={require(`../../assets${images[index]}`)} alt="cars" width={600} height={350} priority />
      
         
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
