import React from 'react'
import HomeBooking from "./HomeBooking"
import Slider from "./Slider"
import Experiences  from "./Experiences"
import AboutUs from "./AboutUs"
import { useRouter } from "next/router";
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"

function Home () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  return (
    <>
    <div>
      <h1>{t.title}</h1>
    
    </div>
     <HomeBooking/>
     <Slider/>
     <AboutUs/>
     <Experiences/>
    </>
  )
}

export default Home;
