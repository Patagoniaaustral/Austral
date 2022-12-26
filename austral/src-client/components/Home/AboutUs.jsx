import React from 'react'
import { useRouter } from "next/router";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"

function AboutUs () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  return (
    <>
    <div>
      {/* //IMAGEN */}
    </div>
    <div>
      <h2>{t.about.atitle}</h2>
      <p>{t.about.atext}</p>
      {/* //barra */}
    </div>
    </>
  )
}


export default AboutUs;