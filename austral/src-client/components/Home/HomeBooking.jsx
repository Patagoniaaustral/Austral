import React, {useState} from 'react'
import { useRouter } from "next/router";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import homeEs from "../../../public/locale/ES/home.json"
import homeEn from "../../../public/locale/EN/home.json"
import styles from '../../../styles/Home/HomeBooking.module.css'

function HomeBooking () {
 
  const objectSelect = {
    category: "none",
    pickUpPlace: "none",
    returnPlace: "none"
  }
  
  const [select, setSelect] = useState(objectSelect)
  console.log(select);
  const [pickUpDate, setPickUpDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  
  const router = useRouter();
  const t = router.locale === "es" ? homeEs : homeEn;

  const handleChange=({target}) => {
    const {value} = target
  
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
  

  const handleClick = (e) => { // push a booking o a checkout??
    router.push({ 
      pathname: '/booking',
      query: { 
        pickUpDate: pickUpDate,
        returnDate: returnDate,
        startTime: startTime,
        endTime: endTime,
        select: select
  }
})
}


  return (
  <>
        <h2>{t.rent}</h2>
      <div className={styles.booking__all_container}>
        <div className={styles.booking__container}>
          <div className={styles.booking__selects_container}>

        <select className={styles.select} name="category" onChange={handleChangeCategory} value={select.category}> 
          <option value="none">{t.booking.bcategory.none}</option>
          <option value="a">{t.booking.bcategory.a}</option>
          <option value="b">{t.booking.bcategory.b}</option>
          <option value="c">{t.booking.bcategory.c}</option>
          <option value="d">{t.booking.bcategory.d}</option>
          <option value="e">{t.booking.bcategory.e}</option>
          <option value="f">{t.booking.bcategory.f}</option>
        </select>

        <select className={styles.select} name ="pickUpPlace" onChange={handleChange} value={select.pickUpPlace}>
          <option value="none">{t.booking.bplace.pickup}</option>
          <option value="airportpu">{t.booking.bplace.airport}</option>
          <option value="downtownpu">{t.booking.bplace.downtown} </option>
          <option value="terminalpu">{t.booking.bplace.terminal}</option>
        </select>

        <select className={styles.select} name="returnPlace" onChange={handleChange} value={select.returnPlace}>
          <option value="none">{t.booking.bplace.return}</option>
          <option value="airportr">{t.booking.bplace.airport}</option>
          <option value="downtownr">{t.booking.bplace.downtown} </option>
          <option value="terminalr">{t.booking.bplace.terminal}</option>
        </select>
        </div>

        <div className={styles.booking__pickers_container}>

        <DatePicker
          className={styles.select_picker}
          selected={pickUpDate}
          onChange={(pickUpDate)=> setPickUpDate(pickUpDate)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          showDisabledMonthNavigation
          closeOnScroll={(e) => e.target === document}
          placeholderText={t.booking.bdatepickup}
        />
             

        <DatePicker
          className={styles.select_picker}
          selected={returnDate}
          onChange={(returnDate)=> setReturnDate(returnDate)}
          dateFormat="dd/MM/yyyy"
          showDisabledMonthNavigation
          closeOnScroll={(e) => e.target === document}
          placeholderText={t.booking.bdatereturn}
          minDate={pickUpDate} // agregar rangos de fechas

          
          />

        <DatePicker
          className={styles.select_picker}
          selected={startTime}
          onChange={(startTime) => setStartTime(startTime)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
        //  minTime={setHours(setMinutes(new Date(), 0), 17)} 
        // maxTime={setHours(setMinutes(new Date(), 30), 20)}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText={t.booking.btimepickup}
          />

        <DatePicker
          className={styles.select_picker}
          selected={endTime}
          onChange={(endTime) => setEndTime(endTime)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText={t.booking.btimereturn}
        />
        </div>
      </div>

      <button className={styles.search__btn} onClick={handleClick}>{t.booking.bsearch}</button>
      </div>
    </>
  );
}


export default HomeBooking;