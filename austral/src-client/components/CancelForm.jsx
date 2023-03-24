import React, {useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/CancelForm.module.css'
//import termsEs from "../../public/locale/ES/cancel.json"
//import termsEn from "../../public/locale/EN/cancel.json"
import  validate  from '../controllers/contactValidate';
import sendCancelForm from '../controllers/sendCancelForm';
import contEs from "../../public/locale/ES/contact.json"
import contEn from "../../public/locale/EN/contact.json"

function CancelForm() {
    const router = useRouter();
   const t = router.locale === "es" ? contEs : contEn;
   const dataInput={
    lastName: "",
    phone: "",
    email : "",
    code : "",
    message: ""
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
      alert("Algunos campos estas incompletos. Por favor, completelos")
    }
    try {
     sendCancelForm(input);
     setInput(dataInput);
     alert("Message send succesfully!")
   } catch (error) {
    alert("Error in send message. Try again.")
   }
  }


  return (
    <div className={styles.main}>

        <h2 className={styles.contact__info__title}>{t.cancel}</h2>
        <p className={styles.contact__info__text}>{t.cancelText}</p>

    <form onSubmit={handleSubmit} className={styles.contact__form} autoComplete="on" >

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

        {/* <label><span>{t.code}</span>
        <input type="text" name="codeReservation"   value={input.code} onChange={handleChange}/>
        {error.code && ( <p>{error.code}</p>)} 
        </label> */}

        <label><span>{t.message}</span>
        <textarea name="message"  aria-label="required" value={input.message} onChange={handleChange} required></textarea>
        {error.message && ( <p>{error.message}</p>)}
        </label>

        
        <button type ="submit"  disabled={Object.values(error).length !== 0}>{t.btnCancel}</button>
    </form>
    </div>
  )
}

export default CancelForm;