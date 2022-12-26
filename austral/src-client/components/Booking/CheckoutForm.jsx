
import Link from "next/link";

export const CheckoutForm = () => {
  return (
    <div>
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

      {/*  en lugar de un select un chekbox???? */}
      <select placeholder="Seleccionar adicionales">
        <option>Conductor Adicional $500</option>
        <option>Asiento para bebe $800</option>
        <option>Seguro Premium $1.500-$2.000</option>
      </select>

      <input type="checkbox" name="terms" required />
      <p>Acepto los terminos acerca del abono del 15% de mi reserva.</p>

      <Link href="/booking/confirmation">
        <button>CONTINUAR</button>
      </Link>
    </div>
  );
};
