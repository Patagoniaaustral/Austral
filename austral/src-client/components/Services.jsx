import React from 'react'
import { useRouter } from "next/router";
import Image from "next/image"
import servEs from "../../public/locale/ES/services.json"
import servEn from "../../public/locale/EN/services.json"
import styles from "../../styles/Services.module.css"

import RedCar from "../../public/assets/fleet/redcar.png"
import ServicesImg from "../../public/assets/hero/services.jpg"
import Credent from "../../public/assets/svg/Credencial.svg"
import Hexa from "../../public/assets/svg/hexBorder.svg"

function Services () {

  const router = useRouter();
  const t = router.locale === "es" ? servEs : servEn;

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.header__title}>{t.services}</h1>
        <Image src="https://res.cloudinary.com/de74ziogy/image/upload/f_auto,q_auto/v1675017786/services_kix8tf.jpg" className={styles.header__img} alt="niño asomandose del auto" width={1300} height={400} priority/>
      </div>

        
        <div className={styles.covers}>
          <div>
            <h2 className={styles.covers__title}>{t.covers}</h2>
            <p>{t.text1a}<span>{t.text1span1}</span>{t.text1b}<span>{t.text1span2}</span></p>
            <p>{t.text2}</p>
            <p>{t.text3}</p>
          </div>
          <Image className={styles.covers__image} src="https://res.cloudinary.com/de74ziogy/image/upload/f_auto,q_auto/v1675017734/redcar_mshc5f.png" alt="modelo de auto" width={600} height={350} />
        </div>
      
        <Image className={styles.first__hexa} src="https://res.cloudinary.com/de74ziogy/image/upload/f_auto,q_auto/v1675017827/hexBorder_vszuno.svg" alt="icono de hexagono grande" width={100} height={100} />

        <div className={styles.containers}>
          <div className={styles.extras}>
            <h2>{t.extras}</h2>
            <ul>
              <li>{t.extra1}</li>
              <li>{t.extra2}</li>
              <li>{t.extra3}</li>
            </ul>
          </div>

          <Image className={styles.second__hexa} src={Hexa} alt="icono de hexagono grande" width={100} height={100} />
         
          <div className={styles.requirements}>
            <h2>{t.required}</h2>
            <div className={styles.requirements__contain}>
                <Image src="https://res.cloudinary.com/de74ziogy/image/upload/f_auto,q_auto/v1675017827/Credencial_zeecov.svg" alt=" icono de permiso conducir" width={200} height={100}/>
              <ul className={styles.requirements__list}>
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
