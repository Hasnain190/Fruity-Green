import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice";


export const store  = configureStore({
reducer:{
    productList:productReducer
}



})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;



