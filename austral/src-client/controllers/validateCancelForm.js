function validate (input){
    
    const error ={}

    switch (true) {
      case !input.name || input.name.length < 3 || !/^[a-zA-Z\s]+$/.test(input.name):
        error.name = "Su nombre es requerido";
        break;
      case !input.lastName || input.lastName.length < 3 || !/^[a-zA-Z\s]+$/.test(input.lastName):
        error.lastName = "Su apellido es requerido";
        break;
      case !input.phone ||
        !/^[0-9]+$/.test(input.phone) ||
        input.phone.length < 10 ||
        input.phone.length > 15 ||
        !(/^\d+$/.test(input.phone)) ||
        typeof Number(input.phone) !== 'number':
        error.phone = "Su teléfono es requerido";
        break;
      case !input.email || !/\S+@\S+\.\S+/.test(input.email):
        error.email = "Su email es requerido";
        break;
      case  typeof Number(input.codeReservation) !== 'number':
        error.codeReservation = "Su código de reserva debe ser numérico";
        break;
      default:
        break;
    }

    return error;

} 


export default validate;
