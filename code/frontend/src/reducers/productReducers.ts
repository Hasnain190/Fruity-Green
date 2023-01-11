import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

  
   
} from '../constants/productConstants'

import '../../type'


interface ProductListRequestAction {
    type: typeof PRODUCT_LIST_REQUEST;
    loading: boolean;
    products: []
    
  }
  interface ProductListSuccessAction {
    type: typeof PRODUCT_LIST_SUCCESS;
    loading: boolean;
    payload: IProduct
  }
  
  interface ProductListFailAction {
    type: typeof PRODUCT_LIST_FAIL;
    loading: boolean
    error: JSON | string 
    payload: JSON | string
  }
  
  type ProductListAction = ProductListSuccessAction | ProductListFailAction| ProductListRequestAction;
  

export const productListReducer = (state = { products: [] }, action:ProductListAction) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
               
            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

interface ProductDetailsRequestAction {
    type: typeof PRODUCT_DETAILS_REQUEST;
    loading: boolean;
    products: []
    
  }
  interface ProductDetailsSuccessAction {
    type: typeof PRODUCT_DETAILS_SUCCESS;
    loading: boolean;
    payload: IProduct
  }
  
  interface ProductDetailsFailAction {
    type: typeof PRODUCT_DETAILS_FAIL;
    loading: boolean
    error: JSON | string 
    payload: JSON | string
  }
  
  type ProductDetailsAction = ProductDetailsRequestAction | ProductDetailsSuccessAction| ProductDetailsFailAction;
  
// reducer for requesting details of individual products
    export const productDetailsReducer = (state = { product: { reviews: [] } }, action:ProductDetailsAction) => {
        switch (action.type) {
            case PRODUCT_DETAILS_REQUEST:
                return { loading: true, ...state }

            case PRODUCT_DETAILS_SUCCESS:
                return { loading: false, product: action.payload }

            case PRODUCT_DETAILS_FAIL:
                return { loading: false, error: action.payload }

            default:
                return state
        }
    }


