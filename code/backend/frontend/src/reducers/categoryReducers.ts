import {

    PRODUCT_CATEGORY_REQUEST,
    PRODUCT_CATEGORY_SUCCESS,
    PRODUCT_CATEGORY_FAIL,

    PRODUCT_CATEGORY_LIST_REQUEST,
    PRODUCT_CATEGORY_LIST_SUCCESS,
    PRODUCT_CATEGORY_LIST_FAIL,


    CATEGORY_INCLUDE_REQUEST,
    CATEGORY_INCLUDE_SUCCESS,
    CATEGORY_INCLUDE_FAIL,

  

} from '../constants/categoryConstants'

interface ProductCategoryListState {
    loading?: boolean;
    products: any[];
    error?: any;
  }
  
  interface ProductCategoryState {
    loading?: boolean;
    products: any[];
    error?: any;
  }
  
  interface CategoryIncludeState {
    loading?: boolean;
    success?: boolean;
    error?: any;
  }
  interface ProductCategoryListRequestAction {
    type: typeof PRODUCT_CATEGORY_LIST_REQUEST;
  }
  
  interface ProductCategoryListSuccessAction {
    type: typeof PRODUCT_CATEGORY_LIST_SUCCESS;
    payload: any[];
  }
  
  interface ProductCategoryListFailAction {
    type: typeof PRODUCT_CATEGORY_LIST_FAIL;
    payload: any;
  }
  
  export type ProductCategoryListActionTypes =
    | ProductCategoryListRequestAction
    | ProductCategoryListSuccessAction
    | ProductCategoryListFailAction;
  
  interface ProductCategoryRequestAction {
    type: typeof PRODUCT_CATEGORY_REQUEST;
  }
  
  interface ProductCategorySuccessAction {
    type: typeof PRODUCT_CATEGORY_SUCCESS;
    payload: any[];
  }
  
  interface ProductCategoryFailAction {
    type: typeof PRODUCT_CATEGORY_FAIL;
    payload: any;
  }
  
  export type ProductCategoryActionTypes =
    | ProductCategoryRequestAction
    | ProductCategorySuccessAction
    | ProductCategoryFailAction;
  
  interface CategoryIncludeRequestAction {
    type: typeof CATEGORY_INCLUDE_REQUEST;
  }
  
  interface CategoryIncludeSuccessAction {
    type: typeof CATEGORY_INCLUDE_SUCCESS;
  }
  
  interface CategoryIncludeFailAction {
    type: typeof CATEGORY_INCLUDE_FAIL;
    payload: any;
  }
  
  export type CategoryIncludeActionTypes =
    | CategoryIncludeRequestAction
    | CategoryIncludeSuccessAction
    | CategoryIncludeFailAction;
  
export const productCategoryListReducer = (state : ProductCategoryListState = { products: [] }, action:ProductCategoryListActionTypes) => {
    switch (action.type) {
        case PRODUCT_CATEGORY_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_CATEGORY_LIST_SUCCESS:
            return { loading: false, products: action.payload, }

        case PRODUCT_CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productCategoryReducer = (state:ProductCategoryState = { products: [] }, action:ProductCategoryActionTypes) => {
    switch (action.type) {
        case PRODUCT_CATEGORY_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_CATEGORY_SUCCESS:
            return { loading: false, products: action.payload, }

        case PRODUCT_CATEGORY_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const categoryIncludeReducer = (state:CategoryIncludeState = {}, action:CategoryIncludeActionTypes) => {
    switch (action.type) {
        case CATEGORY_INCLUDE_REQUEST:
            return { loading: true }

        case CATEGORY_INCLUDE_SUCCESS:
            return { loading: false, success: true }

        case CATEGORY_INCLUDE_FAIL:
            return { loading: false, error: action.payload }

        // case PRODUCT_UPDATE_RESET:
        //     return { product: {} }

        default:
            return state
    }
}
