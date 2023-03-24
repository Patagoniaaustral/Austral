 function validate (input){
    
    const error ={}

    switch (true) {
      case !input.lastName || input.lastName.length < 3 || !/^[a-zA-Z\s]+$/.test(input.lastName):
        error.lastName = "LastName is required";
        break;
      case !input.phone ||
      !/^[0-9]+$/.test(input.phone) ||
      input.phone.length < 10 ||
      input.phone.length > 15 ||
      !(/^\d+$/.test(input.phone)) ||
      typeof Number(input.phone) !== 'number':
        error.phone = "Phone is required";
        break;
      case !input.email || !/\S+@\S+\.\S+/.test(input.email):
        error.email = "Email is required";
        break;
      // case input.code.length < 3:
      //   error.code = "Code is required";
      //   break;
      case !input.message || input.message.length <= 10:
        error.message = "Message is required";
        break;
      default:
        break;
    }

    return error;

} 


export default validate;


