import axios from "axios"

const sendDataForm = async(input) => {
    try {
      const res = await axios.post("/api/contactForm", input)
    } catch (error) {
        console.log(error)
        return error;
    }
}

export default sendDataForm;