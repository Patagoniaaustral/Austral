import axios from "axios"

const sendCancelForm = async(input) => {
    try {
      const res = await axios({
        method: "POST",
        url: "/api/cancelForm",
        data: input,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
}

export default sendCancelForm;