import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styles from "../../../styles/Booking/Reservar.module.css";




function ResearchBooking () {
 
    return (
       <div className={styles.main} >
    
    <div >
      <h2 className={styles.title}>Reservas</h2> 
      <div className={styles.text} role="alert">
          La devolución del vehiculo debe ser dentro de las 24hs, de lo contrario se cobrará un adicional extra. <br/> Se deberá abonar dentro de las 48hs el 15 % del costo de la reserva, de lo contrario se dará de baja la misma.
          </div>
        <p className={styles.text}>Seleccione una categoria e ingrese las fechas para buscar disponibilidad.</p>
    </div>

        <form method="post" className={styles.form__container}>
          <div>
            <label className={styles.form__container__label} htmlFor="exampleInputPassword1">Categoria</label>
            <select className={styles.form__container__select} name="categoria">
                              <option value="1" >Categoria A</option>
                              <option value="2" >Categoria B</option>
                              <option value="3" >Categoria C</option>
                              <option value="9" >Categoria D</option>
                              <option value="10" >Categoria E</option>
                              <option value="11" >Categoría F</option>
                          </select>
          </div>

          <div>
            <label className={styles.form__container__label}>Fecha Desde</label>
            <div>
              <input className={styles.form__container__select} type="text"  name="fecha_desde" placeholder="YYYY / MM / DD" id="datepicker" autocomplete="off" required="required" readonly="readonly"/>
              <span >
            </span>
            </div>
          </div>

          <div >
            <label className={styles.form__container__label}>Fecha Hasta</label>
            <div>
              <input  className={styles.form__container__select} type="text" name="fecha_hasta" placeholder="YYYY / MM / DD" id="datepicker2" autocomplete="off" required="required" readonly="readonly"/>
              <span >
            </span>
            </div>
          </div>

          <div class="form-group">
            <label className={styles.form__container__label}>Hora desde</label>
              <select  className={styles.form__container__select} name="hora_desde" required="">
                <option value="">seleccionar hora...</option>
                <option value="09:00">09:00hs</option>
                <option value="10:00">10:00hs</option>
                <option value="11:00">11:00hs</option>
                <option value="12:00">12:00hs</option>
                <option value="13:00">13:00hs</option>
                <option value="14:00">14:00hs</option>
                <option value="15:00">15:00hs</option>
                <option value="16:00">16:00hs</option>
                <option value="17:00">17:00hs</option>
                <option value="18:00">18:00hs</option>
                <option value="19:00">19:00hs</option>
                <option value="20:00">20:00hs</option>
              </select>
          </div>

          <div>
            <label className={styles.form__container__label}>Hora hasta</label>
            <select  className={styles.form__container__select} name="hora_hasta" required="">
                <option value="">Seleccionar hora...</option>
                <option value="09:00">09:00hs</option>
                <option value="10:00">10:00hs</option>
                <option value="11:00">11:00hs</option>
                <option value="12:00">12:00hs</option>
                <option value="13:00">13:00hs</option>
                <option value="14:00">14:00hs</option>
                <option value="15:00">15:00hs</option>
                <option value="16:00">16:00hs</option>
                <option value="17:00">17:00hs</option>
                <option value="18:00">18:00hs</option>
                <option value="19:00">19:00hs</option>
                <option value="20:00">20:00hs</option>
              </select>
          </div>
          
          <button className={styles.form__container__btn} type="submit" name="buscarDisponibilidad">BUSCAR DISPONIBILIDAD</button>
        </form>
      </div>
    )
}

export default ResearchBooking;

{/*    
   
         <div className={styles.booking__container}>
          <div className={styles.booking__selects_container}>

        <select className={styles.select} name="category" > 
          <option value="">{t.booking.bcategory.none}</option>
          <option value="a">{t.booking.bcategory.a}</option>
          <option value="b">{t.booking.bcategory.b}</option>
          <option value="c">{t.booking.bcategory.c}</option>
          <option value="d">{t.booking.bcategory.d}</option>
          <option value="e">{t.booking.bcategory.e}</option>
          <option value="f">{t.booking.bcategory.f}</option>
        </select>

        <select className={styles.select} name ="pickUpPlace" >
          <option value="" >{t.booking.bplace.pickup}</option>
          <option value="airportpu">{t.booking.bplace.airport}</option>
          <option value="downtownpu">{t.booking.bplace.downtown} </option>
          <option value="terminalpu">{t.booking.bplace.terminal}</option>
        </select>

        <select className={styles.select} name="returnPlace"  value={select.returnPlace}>
          <option value="">{t.booking.bplace.return}</option>
          <option value="airportr">{t.booking.bplace.airport}</option>
          <option value="downtownr">{t.booking.bplace.downtown} </option>
          <option value="terminalr">{t.booking.bplace.terminal}</option>
        </select>
        </div>

         
      
    */}
