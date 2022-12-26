import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"

function Slider () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  return (
    <>
    <div>
      <h2>{t.sliderfleet.ftitle}</h2>
      <p>{t.sliderfleet.ftext}</p>
      
      <Link href="/fleet">
        <button>{t.sliderfleet.fbtn}</button>
      </Link>
    </div>
    <div>
      {/* IMAGEN */}
    </div>
    </>
  )
}


export default Slider;
