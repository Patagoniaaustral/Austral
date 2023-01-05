

// guardar todos los datos en un estado con redux, un objeto para luego poder pedirlo en confirmation



function CheckoutForm () {





 
 
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

const handleOnClick = (e) => {
  e.preventDefault();
  router.push( '/booking/confirmation')
}
  

  

  return (
    <>
     

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




    
      <button onClick={handleOnClick}>CONTINUAR</button>
     
    </>
  );
};


export default CheckoutForm;