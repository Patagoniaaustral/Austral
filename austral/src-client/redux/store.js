import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerCars from "./slice/carsReducer"


const myReducers = combineReducers({
    reducerCars,
})

export default configureStore({
  reducer: myReducers
});



