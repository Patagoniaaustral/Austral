import  { useState } from "react";
import Link from "next/link";
import axios from "axios";

export const CheckoutForm = () => {

  const dataReservation = {
    name : "",
    lastname : "",
    phone : "",
    email : "",
    flight : "",
    pickupplace : "",
    returnplace : "",
    message : "",
    extras : {
      conductor : "",
      asiento : "",
      seguro : ""
    }
  }

  const [input, setInput] = useState(dataReservation);

  const handleSubmit = (e) => {
    e.preventDefault();
    //crear objeto con la data a enviar----> input
  
    // enviar los datos del formulario a la base de datos

    // redireccionar a la pagina de cofirmacion

  }
  

  return (
    <form onSubmit={handleSubmit}>
      <p>Datos Personales</p>

      <label>Nombre</label>
      <input type="text" name="name" placeholder="Ingrese su nombre" required />

      <label>Apellido</label>
      <input
        type="text"
        name="lastname"
        placeholder="Ingrese su apellido"
        required
      />

      <label>{t.phone}</label>
      <input
        className={styles.form__input}
        type="text"
        name="phone"
        value={input.phone}
        onChange={handleChange}
        required
      />
      {error.phone && <p className={styles.form__input_error}>{error.phone}</p>}

      <label>{t.email}</label>
      <input
        className={styles.form__input}
        type="email"
        name="email"
        value={input.email}
        onChange={handleChange}
        required
      />
      {error.email && <p className={styles.form__input_error}>{error.email}</p>}

      <label>Numero de Vuelo</label>
      <input type="text" name="flight" placeholder="Ej: AR1694" required />

      <select
        className={styles.select}
        name="pickUpPlace"
        onChange={handleChange}
        value={select.pickUpPlace}
      >
        <option value="none">{t.booking.bplace.pickup}</option>
        <option value="airportpu">{t.booking.bplace.airport}</option>
        <option value="downtownpu">{t.booking.bplace.downtown} </option>
        <option value="terminalpu">{t.booking.bplace.terminal}</option>
      </select>

      <select
        className={styles.select}
        name="returnPlace"
        onChange={handleChange}
        value={select.returnPlace}
      >
        <option value="none">{t.booking.bplace.return}</option>
        <option value="airportr">{t.booking.bplace.airport}</option>
        <option value="downtownr">{t.booking.bplace.downtown} </option>
        <option value="terminalr">{t.booking.bplace.terminal}</option>
      </select>

      <label>Informacion Adicional</label>
      <textarea
        name="message"
        placeholder="Ej: Necesito un auto con caja automatica"
      ></textarea>
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
      <select placeholder="Seleccionar adicionales">
        <option>Conductor Adicional $500</option>
        <option>Asiento para bebe $800</option>
        <option>Seguro Premium $1.500-$2.000</option>
      </select>

      <input type="checkbox" name="terms" required />
      <p>Acepto los terminos acerca del abono del 15% de mi reserva.</p>

   
        <button type="submit">CONTINUAR</button>
     
    </form>
  );
};
