import  { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/Booking/CheckoutForm.module.css";
// guardar todos los datos en un estado con redux, un objeto para luego poder pedirlo en confirmation



function CheckoutForm () {

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
  const router = useRouter();

  const objectSelect = {
    category: "Category",
    pickUpPlace: "Pick Up Place",
    returnPlace: "Return Place"
  }
  
  const [select, setSelect] = useState(objectSelect)
  const [userData, setUserData] = useState(dataReservation.userData);
 
 
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({ 
      pathname: '/booking/confirmation',
})
    //crear objeto con la data a enviar----> input
    // enviar los datos del formulario a la base de datos
    // redireccionar a la pagina de cofirmacion

  }
  

  return (
    <form onSubmit={handleSubmit}>
        <h1>Datos Personales</h1>
      <div className={styles.user__container}>

        <label>Nombre</label>
        <input type="text" name="name"  value={userData.name} onChange={handleChange} placeholder="Ingrese su nombre" required />

        <label>Apellido</label>
        <input type="text" name="lastname"  value={userData.lastname} onChange={handleChange} placeholder="Ingrese su apellido" required />

        <label>Telefono</label>
        <input type="phone" name="phone" value={userData.phone} onChange={handleChange} required/>

        <label>Email</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} required />
     
        <label>Numero de Vuelo</label>
        <input type="text" name="flight" value={userData.flight} onChange={handleChange} placeholder="Ej: AR1694" required />
      </div>

      {/* <select name="pickUpPlace"onChange={handleChange} value={select.pickUpPlace}>
        <option value="" disabled>{t.booking.bplace.pickup}</option>
        <option value="airportpu">{t.booking.bplace.airport}</option>
        <option value="downtownpu">{t.booking.bplace.downtown} </option>
        <option value="terminalpu">{t.booking.bplace.terminal}</option>
      </select>

      <select name="returnPlace" onChange={handleChange} value={select.returnPlace}>
        <option value="" disabled>{t.booking.bplace.return}</option>
        <option value="airportr">{t.booking.bplace.airport}</option>
        <option value="downtownr">{t.booking.bplace.downtown} </option>
        <option value="terminalr">{t.booking.bplace.terminal}</option>
      </select> */}

      <div className={styles.user__message}>
        <label>Informacion Adicional</label>
        <textarea className={styles.user__message_input} name="message"placeholder="Ej: Necesito un auto con caja automatica"></textarea>
      </div>


      <p>
        Los adicionales estan sujetos a disponibilidad y tienen un valor diario
        que se suman al total de la reserva.
      </p>

      {/*  en lugar de un select un chekbox???? y para la cantidad??? 
      -usar un usestate booleando en un span que diga seleccionar adicionales
      - al apretar con un onclick se tendria que abrir un div con los 3 adicinales
      - hacer un usestate con un bjeto donde se seteen los valores e los adicionnales y se sumen al total de la reserva
      - el adicional del seguro se selecciona con un input tipo checkbox y un span que diga seleccionar seguro
      - el adicional de coductor aicional t asintos  seran dos span con dos botones para sumar y restar 
      - el valor de los adicionales se suman al total de la reserva
      - el valor del seguro se suma al total de la reserva
      */}
      {/* <div className={styles.extras__container}>
       
        <div className={styles.extras__container__content}>
         
            <div className={styles.extras__container__content__item__buttons}>
            <span>Conductor Adicional</span>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
      

         
            <div className={styles.extras__container__content__item__buttons}>
            <span>Asientos Adicionales</span>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
          

        
            <div className={styles.extras__container__content__item__buttons}>
              <input type="checkbox" name="seguro" />
            <span>Seguro Premiun</span>
          </div>
        </div>
      </div> */}




      <div className={styles.terms}>
        <input type="checkbox" name="terms" required />
        <small>Acepto los terminos acerca del abono del 15% de mi reserva.</small>
      </div>

      <button type="submit">CONTINUAR</button>
     
    </form>
  );
};


export default CheckoutForm;