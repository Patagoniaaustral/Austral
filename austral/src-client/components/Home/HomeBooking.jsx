import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'
import HomeMain from "../../../public/assets/hero/HomeMain.jpg"
import Hexa from "../../../public/assets/svg/hexBorder.svg"
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
    const data ={
      select,
      pickUpDate,
      returnDate,
      startTime,
      endTime
    }
    

  // HACER POST A SERRVIDOR O MANDAR POR QUERY U OTRO MEDIO??
// falta cors !
    await axios("https://www.patagoniaaustralrentacar.com.ar/reservar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "POST",
        // "Access-Control-Allow-Headers": "Content-Type",
      },
      data: JSON.stringify(data)
    })
    .then(res => {
      window.location.href = "https://www.patagoniaaustralrentacar.com.ar/reservar"
      console.log(res, "post works")
    })
    .catch(err => {
      console.log(err, "post doesn't work")
    })
  }



  return (
  <section className={styles.section__container}>

    <div className={styles.header__img}>
     <h1>{t.title.split("\n").map((item, key) => {
      return <span key={key}>{item}<br/></span>
     })}</h1>    
        <Image src ={HomeMain} alt="familia de vacaciones en patagonia" width={1920} height={1080} sizes= "(max-width: 768px) 50vw, 1920px" priority/>
       
    </div>
      <Image className={styles.hexa} src={Hexa} alt="icono de hexagono" />


    <div className={styles.rent}>
      <h2>{t.rent}</h2>
    </div>

    {/* <div className={styles.booking__all_container}>
      <h2 className={styles.slogan}>Gestiona tu reserva online</h2>
      <Link className={styles.search__btn} href="https://www.patagoniaaustralrentacar.com.ar/reservar" passHref>{t.booking.bsearch}</Link>
    </div> */}

    <form className={styles.booking__all_container} onSubmit={handlesubmit}>
        
         <div className={styles.booking__container}>
          <div className={styles.booking__selects_container}>

        <select className={styles.select} name="category" onChange={handleChangeCategory} value={select.category}> 
          <option value="">{t.booking.bcategory.none}</option>
          <option value="a">{t.booking.bcategory.a}</option>
          <option value="b">{t.booking.bcategory.b}</option>
          <option value="c">{t.booking.bcategory.c}</option>
          <option value="d">{t.booking.bcategory.d}</option>
          <option value="e">{t.booking.bcategory.e}</option>
          <option value="f">{t.booking.bcategory.f}</option>
        </select>

        <select className={styles.select} name ="pickUpPlace" onChange={handleChange} value={select.pickUpPlace}>
          <option value="" >{t.booking.bplace.pickup}</option>
          <option value="airportpu">{t.booking.bplace.airport}</option>
          <option value="downtownpu">{t.booking.bplace.downtown} </option>
          <option value="terminalpu">{t.booking.bplace.terminal}</option>
        </select>

        <select className={styles.select} name="returnPlace" onChange={handleChange} value={select.returnPlace}>
          <option value="">{t.booking.bplace.return}</option>
          <option value="airportr">{t.booking.bplace.airport}</option>
          <option value="downtownr">{t.booking.bplace.downtown} </option>
          <option value="terminalr">{t.booking.bplace.terminal}</option>
        </select>
        </div>

        <div className={styles.booking__selects_container}>
        <DatePicker
          className={styles.select}
          selected={pickUpDate}
          onChange={(pickUpDate)=> setPickUpDate(pickUpDate)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          showDisabledMonthNavigation
          closeOnScroll={(e) => e.target === document}
          placeholderText={t.booking.bdatepickup}
          locale={router.locale === "es" ? "es" : "en"}
          />

        <DatePicker
          className={styles.select}
          selected={returnDate}
          onChange={(returnDate)=> setReturnDate(returnDate)}
          dateFormat="dd/MM/yyyy"
          showDisabledMonthNavigation  
          closeOnScroll={(e) => e.target === document} 
          placeholderText={t.booking.bdatereturn}
          minDate={addDays(pickUpDate, 3)} 
          locale={router.locale === "es" ? "es" : "en"}      
          />

       

        <DatePicker
          className={styles.select}
          selected={startTime}
          onChange={(startTime) => setStartTime(startTime)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="h:mm aa" 
          placeholderText={t.booking.btimepickup} 
          />
        
        <DatePicker
          className={styles.select}
          selected={endTime}
          onChange={(endTime) => setEndTime(endTime)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText={t.booking.btimereturn}
        />
        </div>
      </div> 
          <button className={styles.search__btn} type="submit">{t.booking.bsearch}</button>
      </form>
    </section>
  );
}


export default HomeBooking;