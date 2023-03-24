import axios from "axios"

const sendCancelForm = async(input) => {
    try {
      const res = await axios.post("/api/cancelForm", input)
    } catch (error) {
        console.log(error)
        return error;
    }
}

export default sendCancelForm;