import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/PrivacyPolicy.module.css'
import privEs from "../../public/locale/ES/policy.json"
import privEn from "../../public/locale/EN/policy.json"

function PrivacyPolicy() {
    const router = useRouter();
   const t = router.locale === "es" ? privEs : privEn;

  return (
    <div className={styles.main} >
          <h2 className={styles.title}>{t.title}</h2>
        <div className={styles.form__container}>
           <p>{t.text}</p>
           <ul className={styles.mainList}>
            <li>
              <strong>{t.finalityTitle}</strong>
              <br/>{t.finalityText}
            </li>
              <li>
              <strong>{t.typedata.title}</strong>
              <br/>{t.typedata.text1}
              <ul className={styles.subList}>
                <li>{t.typedata.data1}</li>
                <li>{t.typedata.data2}</li>
                <li>{t.typedata.data3}</li>
                <li>{t.typedata.data4}</li>
                <li>{t.typedata.data5}</li>
                <li>{t.typedata.data6}</li>
                <li>{t.typedata.data7}</li>
                <li>{t.typedata.data8}</li>
                <li>{t.typedata.data9}</li>
                <li>{t.typedata.data10}</li>
                <li>{t.typedata.data11}</li>
                <li>{t.typedata.data12}</li>
              </ul>
              <br/>
              {t.typedata.text2}
            </li>
            <li>
              <strong>{t.transferDataTitle}</strong>
              <br/>{t.transferDataText}
            </li>
               <li>
              <strong>{t.accesibilityTitle}</strong>
              <br/>{t.accesibilityText}
            </li>
               <li>
              <strong>{t.changeTitle}</strong>
              <br/>{t.changeText}
            </li>
               <li>
              <strong>{t.reclamationTitle}</strong>
              <br/>{t.reclamationText}
              <ul className={styles.subList}>
                <li>Sarmiento 1118, 5º piso (C1041AAX)</li>
                <li>Tel. 4383-8510/12/13/15</li>
                <li>www.jus.gov.ar/datospersonales </li>
                <li>infodnpdp@jus.gov.ar </li>
              </ul>
            </li>
              <li>
              <strong>{t.garantiaTitle}</strong>
              <br/>{t.garantiaText}
            </li>
           </ul>
        </div>
    </div>
  )
}

export default PrivacyPolicy;