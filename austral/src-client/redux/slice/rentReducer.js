import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const reducerRent = createSlice({
  name: "reducerRent",
  initialState: {
    rents: [],
  },
  reducers: {
    getBooking: (state, action) => {
      state.rents = action.payload;
    },
  },
});


export const getRents = () => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: '/api/getReservation',
    }); 

    dispatch(reducerCars.actions.getBooking(data));
  } catch (error) {
    console.log(error)
  }
};



export const sendBooking = (bookingForm) => async (dispatch) => {
    try {
  
      const request = await axios({
        method: 'post',
        url: '/api/postReservation',
        data: bookingForm
      })
    } catch (error) {
      console.log(error);
  };
}


export default reducerRent.reducer