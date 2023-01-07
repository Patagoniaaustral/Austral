import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const reducerCars = createSlice({
  name: "reducerCars",
  initialState: {
    cars: [],
    carsfiltred : []
  },
  reducers: {
    getAllCars: (state, action) => {
      state.cars = action.payload;
    },
    filterByCategory : (state, action) => {
        state.carsfiltred = state.cars.filter((car)=> car.category === action.payload)
    },
    cleanSelect : (state, action)=> {
      state.carsfiltred = state.cars;
    }
  },
});


export const getCars = () => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: '/api/getAllCars',
    }); 

   
    dispatch(reducerCars.actions.getAllCars(data));
  } catch (error) {
    console.log(error)
  }
};

export const filterFleet = (category) => (dispatch) => {
  dispatch(reducerCars.actions.filterByCategory(category));
  }
  
  
export const cleanFilter = (none) => (dispatch) => {
  dispatch(reducerCars.actions.cleanSelect(none));
}

export default reducerCars.reducer