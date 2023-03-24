import React from 'react'
import styles from '../../styles/Booking.module.css'

function Booking (){
  
    return (
    <div>
        <iframe className={styles.iframe} src="https://austral.rentlynetwork.com/elegi-tu-auto?commercialAgreementCode&customPromotionId&dateFrom=08-03-2023&dateTo=10-03-2023&driverAge&dropOffEndpoint=austral&dropOffId=1&hourFrom=15%3A15&hourTo=15%3A15&ilimitedKm=true&onlyFullAvailability=false&pickUpEndpoint=austral&pickUpId=1&promotionCode" frameBorder="0"  />
    </div>
  )
}

export default Booking;