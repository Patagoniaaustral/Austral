import axios from "axios"

const sendNewsletter = async(input) => {
    try {
      const res = await axios.post('/api/newsletterForm', input) 
    } catch (error) {
        console.log(error)
        return error;
    }
}

export default sendNewsletter; 