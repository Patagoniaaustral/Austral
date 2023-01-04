import React from 'react'
import { useRouter } from "next/router";
import Image from "next/image";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from "../../../styles/Home/Experiences.module.css"
import Exp1 from "../../assets/exp1.jpg"
import Exp2 from "../../assets/exp2.jpg"
import Exp3 from "../../assets/exp3.jpg"

function Experiences () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  return (
    <section className={styles.section__container}>
      <h2>{t.experience.etitle}</h2>
      <p>{t.experience.etext}</p>

    <div className={styles.experience__container}>

      <div className={styles.exp__card}>
        <div className={styles.image__container}>
          <Image src={Exp3} alt="exp1" width={300} height={300} />
        </div>
          <p>{t.experience.esubtitle1}</p>
      </div>

      <div className={styles.exp__card}>
        <div className={styles.image__container} > 
          <Image src={Exp2} alt="exp2" width={300} height={300} />
        </div>
          <p>{t.experience.esubtitle2}</p>
      </div>

      <div className={styles.exp__card}>
        <div className={styles.image__container}>
          <Image src={Exp1} alt="exp3" width={300} height={300} />
        </div>
          <p>{t.experience.esubtitle3}</p>
      </div>
    </div>
    </section>
  )
}


export default Experiences;