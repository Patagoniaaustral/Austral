import {useRouter} from 'next/router'
import Link from 'next/link'
import { useRef, useState } from 'react'
import {useSelector} from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import addDays from 'date-fns/addDays'  
import checkEs from "../../../public/locale/ES/checkout.json"
import checkEn from "../../../public/locale/EN/checkout.json"
import styles from "../../../styles/Booking/CheckoutForm.module.css"


function CheckoutForm () {
  const car = useSelector(state => state.reducerCars.cars)

  const [pickUpDate, setPickUpDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  
  const router = useRouter()
  const t = router.locale === "es" ? checkEs : checkEn;
  
  const ref = useRef(null)

  const handleOnClick = (e) => {
    e.preventDefault();
    router.push( '/booking/confirmation')
  }
  

  

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{t.title}</h1>

     {/* ------------------------- DIV DE INFO FRANQUISIA ---------------- */}
      <div className={styles.features__container} ref={ref} id="id">
        <h2>{t.detailCateg.detail}</h2>
        {car.category === "A" || car.category === "B" ? (
          <>
            <p>{t.detailCateg.ab.categ}</p>
            <ul>
              <li>{t.detailCateg.ab.list1}</li>
              <li>{t.detailCateg.ab.list2}</li>
            </ul>

            <p>{t.detailCateg.franchise}</p>
            <ul>
              <li>{t.detailCateg.ab.list3}</li>
              <li>{t.detailCateg.ab.advert}</li>
            </ul>
          </>
        ) : (
          <>
            <p>{t.detailCateg.cde.categ}</p>
            <ul>
              <li>{t.detailCateg.cde.list1}</li>
              <li>{t.detailCateg.cde.list2}</li>
            </ul>

            <p>{t.detailCateg.franchise}</p>
            <ul>
              <li>{t.detailCateg.cde.list3}</li>
              <li>{t.detailCateg.cde.advert}</li>
            </ul>
          </>
        )}
      </div>

      {/* --------------------DIV DE LA RESERVA------------------- */}
      <div className={styles.rent__container}>
        <h2>{t.rent.rent}</h2>
        <h4>{t.rent.rentCode}: #99842</h4>
        
        <div className={styles.rent__prices}>
          <h3>{t.rent.category}:</h3>
          <p>$120,00</p>
        </div>

        <div className={styles.rent__picker}>
          <DatePicker
            className={styles.rent__picker__date}
            selected={pickUpDate}
            onChange={(pickUpDate) => setPickUpDate(pickUpDate)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            showDisabledMonthNavigation
            closeOnScroll={(e) => e.target === document}
            placeholderText={t.rent.pickUpDate}
            locale={router.locale === "es" ? "es" : "en"}
            />
          <DatePicker
            className={styles.rent__picker__date}
            selected={returnDate}
            onChange={(returnDate) => setReturnDate(returnDate)}
            dateFormat="dd/MM/yyyy"
            showDisabledMonthNavigation
            closeOnScroll={(e) => e.target === document}
            placeholderText={t.rent.returnDate}
            minDate={addDays(pickUpDate, 3)}
            locale={router.locale === "es" ? "es" : "en"}
            />
            </div>

        <div className={styles.rent__prices}>
          <h3>{t.rent.extras}*:</h3>
          <p>$500</p> {/* // ESTO ES UNA PRUEBA, NO ES EL PRECIO REAL. TRAER DESDE EL BACK*/}
        </div>
          <button>+ {t.rent.addextras}</button>
       
        <div className={styles.rent__prices}>
          <h2>{t.rent.total} **</h2>
          <h2>$120,00</h2> {/* // ESTO ES UNA PRUEBA, NO ES EL PRECIO REAL. TRAER DESDE EL BACK*/}
        </div>
        <small>{t.rent.conditions1}</small>
        <small>{t.rent.conditions2}</small>
      </div>

      {/* --------------------- DIV DE LAS CONDICIONES  ------------------------ */}
      <div className={styles.conditions__container}>
        <h2>{t.condition.detail}</h2>
        <ul>
     
          <li>{t.condition.list1}</li>
          <li>{t.condition.list2}</li>
          <li>{t.condition.list3}</li>
          <li>{t.condition.list4}</li>
          <li>{t.condition.list5}</li>
        </ul>

        <div className={styles.condition__terms}>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" name="terms" value="terms" />
            {t.terms}
            <Link href="#id">
              {" "}
              {t.read}{" "}
            </Link>
          </label>

          <button onClick={handleOnClick}>{t.btn}</button>
        </div>
      </div>
    </div>
  );
};


export default CheckoutForm;
    // guardar todos los datos en un estado con redux, un objeto para luego poder pedirlo en confirmation
    
    
   

