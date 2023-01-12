import {
   
    combineReducers,
    applyMiddleware
} from 'redux'
import { configureStore , createSlice} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { useDispatch } from 'react-redux'

import {
    productListReducer,
    productDetailsReducer,

} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
    userLoginReducer,
    userRegisterReducer,


    userDetailsReducer,
    userUpdateProfileReducer,
  

} from './reducers/userReducers'
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer,
} from './reducers/orderReducers'
import {
    productCategoryReducer,
    productCategoryListReducer,
    categoryIncludeReducer,

} from './reducers/categoryReducers'



const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
   
    productCategory: productCategoryReducer,
    productCategoryList: productCategoryListReducer,

    categoryInclude: categoryIncludeReducer,

   

    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,


    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
  
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,

})

const cartItemsFromStorage = localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem('cartItems') ?? "{}") : []


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo') ?? "{}") : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress') ?? "{}") : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage },

}


const middleware = [thunk]

const store = configureStore({

reducer: { reducer}

})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types


export default store

//  RootState is a type that is equivalent to the type of the current state of the application, as returned by the store.getState method. This can be useful for type checking and for providing better type information for the rest of the application.
export type RootState = ReturnType<typeof reducer>;