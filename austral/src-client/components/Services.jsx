import React from 'react'
import { useRouter } from "next/router";
import servEs from "../../public/locale/ES/services.json"
import servEn from "../../public/locale/EN/services.json"
import styles from "../../styles/Services.module.css"
import Image from "next/image"
import ServicesImg from "../assets/services.jpg"


function Services () {

  const router = useRouter();
  const t = router.locale === "es" ? servEs : servEn;

  return (
    <div className={styles.main}>

    <div className={styles.header__img}>
      <Image src={ServicesImg} alt="vista subjetiva de pasajero manejando" width={1300} height={400} priority={true} placeholder="blur"/>
      <h1>{t.services}</h1>
    </div>

      
      
      <div className={styles.covers__container}>
        <h2>{t.covers}</h2>
        <p>{t.text1}</p>
        <p>{t.text2}</p>
        <p>{t.text3}</p>
      </div>

      
      
      
      <div>
        <div className={styles.services__container}>
          
          <div className={styles.services__extra_container}>
            <h2>{t.extras}</h2>
            <ul>
              <li>{t.extra1}</li>
              <li>{t.extra2}</li>
              <li>{t.extra3}</li>
            </ul>
          </div>

          <div className={styles.services__require_container}>
            <h2>{t.required}</h2>
            <div>
              {/* icono  */}
            </div>
            <ul>
              <li>{t.req1}</li>
              <li>{t.req2}</li>
              <li>{t.req3}</li>
              <li>{t.req4}</li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Services;
