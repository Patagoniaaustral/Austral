import React from 'react'
import { useRouter } from "next/router";
import servEs from "../../public/locale/es/services.json"
import servEn from "../../public/locale/en/services.json"
import Image from "next/image"

function Services () {

  const router = useRouter();
  const t = router.locale === "es" ? servEs : servEn;
  
  return (
    <>
      <h1>{t.services}</h1>
    <div>
      <h2>{t.covers}</h2>
      <p>{t.text1}</p>
      <p>{t.text2}</p>
      <p>{t.text3}</p>
    </div>

  <div>

    <div>
      <h2>{t.extras}</h2>
      <ul>
        <li>{t.extra1}</li>
        <li>{t.extra2}</li>
        <li>{t.extra3}</li>
      </ul>
    </div>

    <div>
      <h2>{t.required}</h2>
      <div></div>
      <ul>
        <li>{t.req1}</li>
        <li>{t.req2}</li>
        <li>{t.req3}</li>
        <li>{t.req4}</li>
      </ul>
    </div>

    
    </div>
    </>
  )
}

export default Services;
