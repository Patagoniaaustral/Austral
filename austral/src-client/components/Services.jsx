import React from 'react'
import { useRouter } from "next/router";
import servEs from "../../public/locale/ES/services.json"
import servEn from "../../public/locale/EN/services.json"
import styles from "../../styles/Services.module.css"
import Image from "next/image"
import ServicesImg from "../assets/services.jpg"
import Credent from "../assets/Credencial.svg"
import Hexa from "../assets/hexBorder.svg"
import HexaIco from "../assets/hex.svg"

function Services () {

  const router = useRouter();
  const t = router.locale === "es" ? servEs : servEn;

  return (
    <div className={styles.main}>
      <div className={styles.header__img}>
        <Image
          src={ServicesImg}
          alt="vista subjetiva de pasajero manejando"
          width={1300}
          height={400}
          priority
        />
        <h1>{t.services}</h1>
      </div>

      <div className={styles.general__container}>
      <div className={styles.covers__container}>
        <h2>{t.covers}</h2>
        <p>{t.text1a}<span> {t.text1span1}</span> {t.text1b}<span> {t.text1span2}</span></p>
        <p>{t.text2}</p>
        <p>{t.text3}</p>
      </div>
      
      <Image src={Hexa} alt="hexagono1" width={100} height={100} />

        <div className={styles.services__container}>
          <div className={styles.services__extra_container}>
            <h2>{t.extras}</h2>
            <ul>
              <li><Image src={HexaIco} alt="hexagono2" width={12} height={16} />{t.extra1}</li>
              <li><Image src={HexaIco} alt="hexagono2" width={12} height={16} />{t.extra2}</li>
              <li><Image src={HexaIco} alt="hexagono2" width={12} height={16} />{t.extra3}</li>
            </ul>
          </div>

          <div className={styles.services__require_container}>
            <h2>{t.required}</h2>
            <div>
              <div>
                <Image src={Credent} alt="credencial" width={200} height={100}
                />
              </div>
              <ul>
                <li><Image src={HexaIco} alt="hexagono2" width={12} height={16} />{t.req1}</li>
                <li><Image src={HexaIco} alt="hexagono2" width={12} height={16} />{t.req2}</li>
                <li><Image src={HexaIco} alt="hexagono2" width={12} height={16} />{t.req3}</li>
                <li><Image src={HexaIco} alt="hexagono2" width={12} height={16} />{t.req4}</li>
              </ul>
            </div>
          </div>
            <Image src={Hexa} alt="hexagono2" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Services;
