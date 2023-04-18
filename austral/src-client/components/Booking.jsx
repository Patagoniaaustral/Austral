import React, {useState} from 'react'
import styles from '../../styles/Booking.module.css'
import Link from 'next/link'

function Booking (){
  const [iframeerror, setIframeerror] = useState(false)
  
    return (
    <div>

      {iframeerror ? 
      <div className={styles.error}>Error al cargar el iframe, comuniquese con austral al
      <Link href="https://wa.me/5492944242615" target={"_blank"}><p>+549 294 424 2615</p></Link></div> 
      :
        <iframe className={styles.iframe} onError={() => setIframeerror(true)}
          src="https://austral.rentlynetwork.com/elegi-tu-auto?commercialAgreementCode&customPromotionId&dateFrom=08-03-2023&dateTo=10-03-2023&driverAge&dropOffEndpoint=austral&dropOffId=1&hourFrom=15%3A15&hourTo=15%3A15&ilimitedKm=true&onlyFullAvailability=false&pickUpEndpoint=austral&pickUpId=1&promotionCode" frameBorder="0"  />
      }
        </div>
  )
}

export default Booking;