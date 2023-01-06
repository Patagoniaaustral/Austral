import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import HomeCar from "../../assets/home3.jpg"
//import styles from "../../../styles/Home/Slider.module.css"

function Slider () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  return (
    <section className={styles.section__container}>
    <div className={styles.info__container}>
      <h2>{t.sliderfleet.ftitle}</h2>
      <p>{t.sliderfleet.ftext}</p>
      <Link href="/fleet">
        <button className={styles.btn}>{t.sliderfleet.fbtn}</button>
      </Link>
    </div>
    <div className={styles.image__container}>
      <Image src={HomeCar} alt="" with="50" heigth="50"/>
    </div>
    </section>
  )
}


export default Slider;
