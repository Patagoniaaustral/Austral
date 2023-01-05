import { useState } from 'react'
import {useRouter} from 'next/router'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import confEs from "../../../public/locale/ES/confirmation.json"
import confEn from "../../../public/locale/EN/confirmation.json"
import styles from "../../../styles/Booking/Confirmation.module.css";



function Confirmation () {

  const dataReservation = {
    userData : {
      name : "",
      lastname : "",
      phone : "",
      email : "",
      flight : ""
    },
    pickupplace : "",
    returnplace : "",
    message : "",
    extras : {
      conductor : "",
      asiento : "",
      seguro : ""
    }
  }
 
  const objectSelect = {
    category: "Category",
    pickUpPlace: "Pick Up Place",
    returnPlace: "Return Place"
  }
  
  // hacer get by id de la reserva en redux, traer con use selector, useeffects+ dispatch y senderizar datos
  const router = useRouter()
  const t = router.locale === "es" ? confEs : confEn;

  const [select, setSelect] = useState(objectSelect)
  const [userData, setUserData] = useState(dataReservation.userData);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
 
 
  const handleChange=({target}) => {
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
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // await sendReservation(... info para hacer el POST de la reserva en el back ...)
    alert("Your reservations was made sucessfully ")
    router.push("/")
  }
 

  
  return (
    <>
    <h1 className={styles.title}>{t.rent}</h1>
    <form className={styles.form__container} onSubmit={handleSubmit}>
      <h2>{t.rentDetail.detail}</h2>
      <p>{t.rentDetail.rentCode}</p> {/* //deberia ser el id?? o que puedo usar de codigo? */}

      <p>{t.rentDetail.category} </p>
      <p>{t.rentDetail.extras}</p>

    <div>
      <p>{t.rentDetail.pickUp}</p>
      <p>{t.rentDetail.return}</p>
      <select className={styles.select} name ="pickUpPlace" onChange={handleChange} value={select.pickUpPlace}>
          <option value="" >{t.rentDetail.booking.bplace.pickup}</option>
          <option value="airportpu">{t.rentDetail.booking.bplace.airport}</option>
          <option value="downtownpu">{t.rentDetail.booking.bplace.downtown} </option>
          <option value="terminalpu">{t.rentDetail.booking.bplace.terminal}</option>
        </select>

        <select className={styles.select} name="returnPlace" onChange={handleChange} value={select.returnPlace}>
          <option value="">{t.rentDetail.booking.bplace.return}</option>
          <option value="airportr">{t.rentDetail.booking.bplace.airport}</option>
          <option value="downtownr">{t.rentDetail.booking.bplace.downtown} </option>
          <option value="terminalr">{t.rentDetail.booking.bplace.terminal}</option>
        </select>

        
        <DatePicker
          className={styles.select}
          selected={startTime}
          onChange={(startTime) => setStartTime(startTime)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="h:mm aa" 
          placeholderText={t.rentDetail.booking.btimepickup} 
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
          placeholderText={t.rentDetail.booking.btimereturn}
          
          />
    </div>

      
    <h2>{t.userInfo.info}</h2>
      <div className={styles.user__container}>

        <label>{t.userInfo.name}</label>
        <input type="text" name="name"  value={userData.name} onChange={handleChange}  required />

        <label>{t.userInfo.lastname}</label>
        <input type="text" name="lastname"  value={userData.lastname} onChange={handleChange}  required />

        <label>{t.userInfo.phone}</label>
        <input type="phone" name="phone" value={userData.phone} onChange={handleChange} required/>

        <label>{t.userInfo.email}</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} required />
      </div>
     
      <div className={styles.user__message}>
        <label>{t.userInfo.flight}</label>
        <input type="text" name="flight" value={userData.flight} onChange={handleChange}  required />

        <label>{t.userInfo.observations}</label>
        <textarea className={styles.user__message_input} name="message"></textarea>
      </div>
      
      <div className={styles.terms}>
        <input type="checkbox" name="terms" required />
        <small>{t.terms}</small>
      </div>

    
      <button type="submit" onClick={handleSubmit}>{t.btn}</button> 
    </form>
    </>
  );
};


export default Confirmation;