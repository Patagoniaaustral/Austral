import React from 'react'
import { useRouter } from "next/router";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from "../../../styles/Home/Experiences.module.css"

function Experiences () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  return (
    <>
    <h2>{t.experience.etitle}</h2>
    <p>{t.experience.etext}</p>

    <div className={styles.experience__container}>
      <div>
        <div>
          {/* //IMAGEN */}
          <p>{t.experience.esubtitle1}</p>
        </div>
      </div>
      <div>
        <div>
          {/* //IMAGEN */}
          <p>{t.experience.esubtitle2}</p>
        </div>
      </div>
      <div>
        <div>
          {/* //IMAGEN */}
          <p>{t.experience.esubtitle3}</p>
        </div>
      </div>
    </div>
    </>
  )
}


export default Experiences;