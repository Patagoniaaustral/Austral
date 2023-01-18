import { createSlice } from "@reduxjs/toolkit";
import carsData from '../../controllers/carsdata.json'

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

export const getCars = () => (dispatch) => {
  dispatch(reducerCars.actions.getAllCars(carsData));
};

export const filterFleet = (category) => (dispatch) => {
  dispatch(reducerCars.actions.filterByCategory(category));
  }
  
  
export const cleanFilter = (none) => (dispatch) => {
  dispatch(reducerCars.actions.cleanSelect(none));
}

export default reducerCars.reducer