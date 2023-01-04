import React from 'react'
import { useRouter } from "next/router";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import Image from 'next/image'
import HomeRoute from '../../assets/home4.jpg'
import styles from "../../../styles/Home/AboutUs.module.css"

function AboutUs () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  return (
    <section className={styles.section__container}>
      <div>
        <Image src={HomeRoute} alt="ruta hacia el horizonte" width={250} height={500} />
      </div>
      <div>
        <h2>{t.about.atitle}</h2>
        <p>{t.about.atext}</p>
        {/* //barra vector */}
      </div>
    </section>
  )
}


export default AboutUs;