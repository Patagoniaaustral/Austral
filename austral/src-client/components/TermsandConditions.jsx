import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/TermsandConditions.module.css'
import termsEs from "../../public/locale/ES/terms.json"
import termsEn from "../../public/locale/EN/terms.json"

function TermsandConditions() {
    const router = useRouter();
    const t = router.locale === "es" ? termsEs : termsEn;

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{t.terms}</h2>

      <div className={styles.form__container}>
      <h2>{t.confirm}</h2>
      <p>{t.confirmText}</p><br/>


      <h3><strong>{t.Ititle}</strong></h3>
      <p>{t.Itext}</p><br />

        <h3><strong>{t.IItitle} </strong></h3> <p>{t.IItextA}</p>
       
        <a className={styles.links} href= "http://www.patagoniaaustralrentacar.com.ar/ModelodeContratoAustral.pdf" download="ModelodeContratoAustral.pdf">{t.contract}</a> 
        <p>{t.IItextB}<Link className={styles.links} href=" https://www.patagoniaaustralrentacar.com.ar/" target={"_blank"}>
           https://www.patagoniaaustralrentacar.com.ar/</Link>.</p><br/> 
        
        <h3><strong>{t.IIItitle}</strong></h3>
        <p>{t.IIItext}</p><br />

        <h3><strong>{t.IVtitle}</strong></h3>
        <p>{t.IVtext}</p><br/>

        <h3><strong>{t.Vtitle} </strong></h3>
        <p>{t.Vtext}</p><br />

        <h3><strong>{t.VItitle}</strong> </h3>
        <p>{t.VItextA}<Link className={styles.links} href=" https://www.patagoniaaustralrentacar.com.ar/" target={"_blank"}>
           https://www.patagoniaaustralrentacar.com.ar/ </Link>{t.VItextB}</p><br />

        <h3>  <strong>{t.VIItitle}</strong></h3>
        <p>{t.VIItext} <Link className={styles.links} href=" https://www.patagoniaaustralrentacar.com.ar/" target={"_blank"}>
        https://www.patagoniaaustralrentacar.com.ar/ </Link>
        </p><br />

          <h3><strong>{t.VIIItitle}</strong></h3>
        <p>{t.VIIItextA} <Link className={styles.links} href=" https://www.patagoniaaustralrentacar.com.ar/" target={"_blank"}>
       https://www.patagoniaaustralrentacar.com.ar/</Link>
         {t.VIIItextB}</p><br />

        <h3><strong>{t.IXtitle}</strong></h3>
        <p>{t.IXtext}</p>
      </div>

      <a className={styles.links} href= "https://www.patagoniaaustralrentacar.com.ar/ModelodeContratoAustral.pdf" download="ModelodeContratoAustral.pdf">
          <button className={styles.button}  >{t.download}</button>
      </a> 

    </div>
  );
}

export default TermsandConditions;