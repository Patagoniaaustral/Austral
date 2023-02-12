
import "react-datepicker/dist/react-datepicker.css"
import styles from "../../../styles/Booking/ConfirmacionAustral.module.css";
import Link from 'next/link'



function ConfirmacionAustral () {

 

  
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Reservas</h1>
      <p className={styles.text} ><strong >Complete el siguiente formulario para continuar con su reserva desde el ... hasta el ...</strong></p>
      <p className={styles.text}>Código Reserva : ... - Tarifa Actual : ...</p>
     
      <button type="button" className={styles.form__container__btn} data-toggle="modal" data-target="#exampleModalScrollable">
        Ver más Info
      </button>

    <form className={styles.form__container}>

        <h2>Datos Personales</h2>
      <div className={styles.form__container__user}>
        <label>Nombre
        <input  className={styles.form__container__input} type="text" name="name"    required />
        </label>

        <label>Apellido
        <input className={styles.form__container__input} type="text" name="lastname"   required />
        </label>

        <label>Teléfono
        <input className={styles.form__container__input} type="phone" name="phone"  required/>
        </label>
    
        <label>Email
        <input className={styles.form__container__input} type="email" name="email"  required />
        </label>
      </div>
      
      <div className={styles.form__container__place}>
        <label> Número de vuelo
        <input className={styles.form__container__input} type="text" name="flight"  required />
        </label>

        <label>Recogida
      <select className={styles.select} name ="pickUpPlace"  >
          <option value="" >Lugar de Retiro</option>
          <option value="airportpu">Aeropuerto</option>
          <option value="downtownpu">Centro de Bariloche</option>
          <option value="terminalpu">Terminal de Onmibus</option>
        </select>
        </label>

        <label>Devolución
        <select className={styles.select} name="returnPlace" >
          <option value="">Lugar de Devolución</option>
          <option value="airportr">Aeropuerto</option>
          <option value="downtownr">Centro de Bariloche </option>
          <option value="terminalr">Terminal de Omnibus</option>
        </select>
        </label>
      </div>


        <label> Observaciones
        <textarea className={styles.user__message_input} name="message"></textarea>
        </label>

      <h2>Adicionales</h2>
      <select className={styles.aditional__select} multiple="" id="adicionales" name="adicionales[]"  tabindex="-1" aria-hidden="true">
            <option value="6">Conductor Adicional $ 500.00 </option>
            <option value="1">Silla Bebé $ 800.00 </option>
            <option value="5">Seguro Premium $ 1500.00  - $ 2000.00</option>
      </select>
      

      <p className={styles.disclaimer} >*Los adicionales están sujetos a disponibilidad y tienen un valor diario que se suman al total de la reserva.</p>



    <div className={styles.form__container__checkbox}>
          <input type="checkbox" id="terms" name="terms" value="terms" />
          <label  htmlFor="terms">Acepto los términos acerca del abono del 15 % de mi Reserva.</label>
    </div>
      
    
      <button className={styles.form__container__btn} type="submit">RESERVAR</button>           
    </form>
    </div>
  );
};


export default ConfirmacionAustral;


// tengo que hacer un map de los valores que se seleccionan y sumarlos al total de la reserva



