import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'
import HomeHero from "../../../public/assets/hero/Familia jugando en una plaza de Bariloche.webp"
import DatePicker from "react-datepicker"
import addDays from 'date-fns/addDays'  
import "react-datepicker/dist/react-datepicker.css"
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from '../../../styles/Home/HomeBooking.module.css'

function HomeBooking () {
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  
  const objectSelect = {
    category: "none",
    pickUpPlace: "none",
    returnPlace: "none",
  }
  
  const [select, setSelect] = useState(objectSelect)
  const [pickUpDate, setPickUpDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  
  useEffect(() => {
    return setSelect(objectSelect)
  }, [])
  

  const handleChange=({target}) => {
    const {name, value} = target
    setSelect({
      ...select,
      [name]: value
    })
  }

  const handleChangeCategory=({target}) => {
    const {name, value} = target
   if(name === "category") {
    setSelect({
      ...select,
      [name]: value
    })
   } else if (name === "pickUpPlace") {
    setSelect({
      ...select,
      [name]: value
    })
   } else if (name === "returnPlace") {
    setSelect({
      ...select,
      [name]: value
    })
   }
}
  
const handlesubmit = async(e) => {   
    e.preventDefault()
    window.location.href = "https://www.patagoniaaustralrentacar.com.ar/reservar"
  }




  return (
  <section className={styles.section__container}>

    <div className={styles.header__img}>
     <h1>{t.title.split("\n").map((item, key) => {
      return <span key={key}>{item}<br/></span>
     })}</h1>
        <Image src ={HomeHero} sizes= " (max-width: 768px) 200vw, 100vw" placeholder='blur' alt="Familia jugando en una plaza de Bariloche" priority/>
    </div>

    <form className={styles.booking__all_container} onSubmit={handlesubmit}>
          <button className={styles.search__btn} type="submit">{t.booking.bsearch}</button>
      </form>
    </section>
  );
}


export default HomeBooking;