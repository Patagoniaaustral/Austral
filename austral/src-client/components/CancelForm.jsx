import React, {useState} from 'react'
import { useRouter } from 'next/router'
import swal from 'sweetalert';
import styles from '../../styles/CancelForm.module.css'
import  validate  from '../controllers/validateCancelForm';
import sendCancelForm from '../controllers/sendCancelForm';
import contEs from "../../public/locale/ES/contact.json"
import contEn from "../../public/locale/EN/contact.json"

function CancelForm() {
  const router = useRouter();
   const t = router.locale === "es" ? contEs : contEn;
  
  const dataInput={
    name : "",
    lastName: "",
    phone: "",
    email : "",
    codeReservation : "",
    message: "",
  }


  const [input, setInput]= useState(dataInput)
  const [error, setError] = useState(dataInput)

  const handleChange = ({target})=>{
    const {name, value} = target;
    setInput({...input, [name]: value});
    setError(validate({...input, [name]:value}))
  }
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Object.values(error).length !== 0){
      swal("Algunos campos estan incompletos. Por favor, completelos")
    }

    const data = {
      input,
      router: router.locale
    }

    try {
     await sendCancelForm(data);
     setInput(dataInput);
     swal("Su mensaje fue enviado con éxito.",{
      buttons: false,
      timer: 1000,
    });
  
   } catch (error) {
   swal("Error al enviar el mensaje. Intente nuevamente.")
   }
  }


  return (
    <div className={styles.main}>

        <h2 className={styles.contact__info__title}>{t.cancel}</h2>
        <p className={styles.contact__info__text}>{t.cancelText}</p>

    <form onSubmit={handleSubmit} className={styles.contact__form} autoComplete="on" >

        
    <label><span>{t.name}</span>
        <input type="text" name="name"  aria-label="required" value={input.name} onChange={handleChange} required/>
        {error.name && ( <p>{error.name}</p>)}
        </label>

        <label><span>{t.lastname}</span>
        <input type="text" name="lastName"  aria-label="required" value={input.lastName} onChange={handleChange} required/>
        {error.lastName && ( <p>{error.lastName}</p>)}
        </label>

        <label><span>{t.phone}</span>
        <input type="phone" name="phone"  aria-label="required" value={input.phone} onChange={handleChange} required/>
        {error.phone && ( <p>{error.phone}</p>)}
        </label>

        <label><span>{t.email}</span>
        <input type="email" name="email"  aria-label="required" value={input.email} onChange={handleChange} required/>
        {error.email && ( <p>{error.email}</p>)}
        </label>

        <label><span>{t.codeReservation}</span>
        <input type="text" name="codeReservation"   value={input.codeReservation} onChange={handleChange}/>
        {error.codeReservation && ( <p>{error.codeReservation}</p>)}
        </label>

        <label><span>{t.message}</span>
        <textarea name="message"  value={input.message} onChange={handleChange}></textarea>
        </label>

        
        <button type ="submit"  disabled={Object.values(error).length !== 0}>{t.btnCancel}</button>
    </form>
    </div>
  )
}

export default CancelForm;