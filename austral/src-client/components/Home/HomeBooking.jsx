import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import addDays from 'date-fns/addDays'  
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import HomeMain from "../../assets/HomeMain.jpg"
import styles from '../../../styles/Home/HomeBooking.module.css'


function HomeBooking () {
 
  const objectSelect = {
    category: "none",
    pickUpPlace: "none",
    returnPlace: "none"
  }
  
  const [select, setSelect] = useState(objectSelect)
  const [pickUpDate, setPickUpDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;
  
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
  

  const handleClick = (e) => { 
    // hacer un get y filter en redux con estos parametros
     
    router.push({ 
      pathname: '/booking/checkout',
  //     query: { 
  //       pickUpDate: pickUpDate,
  //       returnDate: returnDate,
  //       startTime: startTime,
  //       endTime: endTime,
  //       select: select
  // }
})
}


  return (
  <section className={styles.section__container}>

    <div className={styles.header__img}>
     <h1>{t.title}</h1>
     <Image src ={HomeMain} alt="" width={1500} height={500} quality={100} priority={true} placeholder="blur"/>
    </div>

    <div>
      <h2>{t.rent}</h2>
    </div>

      <div className={styles.booking__all_container}>
        
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
          timeIntervals={60}
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
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText={t.booking.btimereturn}
        
        />
        </div>
      </div>

      <button className={styles.search__btn} onClick={handleClick}>{t.booking.bsearch}</button>
      </div>
    </section>
  );
}


export default HomeBooking;