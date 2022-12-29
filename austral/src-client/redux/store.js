import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerCars from "./slice/carsReducer"
import reducerRent from './slice/rentReducer'


const myReducers = combineReducers({
    reducerCars,
    reducerRent
})

export default configureStore({
  reducer: myReducers
});



