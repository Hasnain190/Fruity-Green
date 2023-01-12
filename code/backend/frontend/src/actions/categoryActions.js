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
import axios from 'axios'




export const includeCategory = (categoryId, productId) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_INCLUDE_REQUEST })


        const formDataForCat = new FormData()
        formDataForCat.append('product_id', productId)


        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.put(`/api/category/update/${categoryId}/`, formDataForCat, config)

        console.log(data)
        dispatch({
            type: CATEGORY_INCLUDE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_INCLUDE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const categoryProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_CATEGORY_REQUEST })

        const { data } = await axios.get(`/api/category/categorylist/`)

        dispatch({
            type: PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const categoryListProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_CATEGORY_LIST_REQUEST })

        const { data } = await axios.get(`/api/category/${id}/`)

        dispatch({
            type: PRODUCT_CATEGORY_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CATEGORY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


