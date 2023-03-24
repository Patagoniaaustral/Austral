import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { downloadFile } from '../controllers/downloadFile'
import styles from '../../styles/TermsandConditions.module.css'
import termsEs from "../../public/locale/ES/terms.json"
import termsEn from "../../public/locale/EN/terms.json"

function TermsandConditions() {
    const router = useRouter();
    const t = router.locale === "es" ? termsEs : termsEn;

    const handleDownload = () => {
      downloadFile("https://www.australrentacar.ar/ModeloDeContratoAustral.pdf", "ModeloDeContratoAustral.pdf")

    }



  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{t.terms}</h2>

      <div className={styles.form__container}>
      <h2>{t.confirm}</h2>
      <p>{t.confirmText}</p><br/>


      <h3><strong>{t.Ititle}</strong></h3>
      <p>{t.Itext}</p><br />

        <h3><strong>{t.IItitle} </strong></h3> <p>{t.IItextA}</p><a className={styles.links} href="https://australrentacar.ar/ModeloDeContratoAustral.pdf" download="ModeloDeContratoAustral.pdf">CONTRATO</a>
        <p>{t.IItextB}<Link className={styles.links} href="https://australrentacar.ar" target={"_blank"}>https://australrentacar.ar</Link>.</p><br/> 
        
        <h3><strong>{t.IIItitle}</strong></h3>
        <p>{t.IIItext}</p><br />

        <h3><strong>{t.IVtitle}</strong></h3>
        <p>{t.IVtext}</p><br/>

        <h3><strong>{t.Vtitle} </strong></h3>
        <p>{t.Vtext}</p><br />

        <h3><strong>{t.VItitle}</strong> </h3>
        <p>{t.VIIItextA}<Link className={styles.links} href="https://australrentacar.ar" target={"_blank"}>https://australrentacar.ar</Link>. Vencido el Plazo de Tolerancia,
         {t.VIIItextB}</p><br />

        <h3>  <strong>{t.VIItitle}</strong></h3>
        <p>{t.VIItext} <Link className={styles.links} href="https://australrentacar.ar" target={"_blank"}>https://australrentacar.ar</Link>.
        </p><br />

          <h3><strong>{t.VIIItitle}</strong></h3>
        <p>{t.VIIItextA} <Link className={styles.links} href="https://australrentacar.ar" target={"_blank"}>https://australrentacar.ar</Link>. A partir de su presentación de
         {t.VIIItextB}</p><br />

        <h3><strong>{t.IXtitle}</strong></h3>
        <p>{t.IXtext}</p>
      </div>

          <button className={styles.button} onClick={handleDownload}>{t.download}</button>

    </div>
  );
}

export default TermsandConditions;