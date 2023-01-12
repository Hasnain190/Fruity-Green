import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



interface Product {
  _id: number;
  name: string;
  image: string;
  description: string;
  Featured: boolean;
  price: string | number;
  countInStock: number;
  createdAt: string;
  user: number;
  category: number;
}

interface ProductList {
  products: Product[];
  loading?: boolean;
  error?: any;
}
const initialState: ProductList = {
  products: [],
  loading: false,
  error: undefined,
};

const productListSlice = createSlice({
  name: "productList",
//   initialState: { products: [], loading: false, error: null },
  
  initialState,
  reducers: {
    getProductListRequest: (state) => {
      state.loading = true;
      state.products =[]
    },
    getProductListSuccess: (state, action:PayloadAction<any>) => {
      state.products = action.payload.products;
      state.loading = false;
      state.error = null;
    },
    getProductListError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getProductListRequest,
  getProductListSuccess,
  getProductListError,
} = productListSlice.actions;

// action creators for product list

// it should be noted that action creators does not mutate the data . They just transfer or dispatch from place where data changes to store so that it can change its new state

export const listProducts = () => async (dispatch:Dispatch) => {
  try {
    dispatch(getProductListRequest());
    const { data } = await axios.get(`http://127.0.0.1:8000/api/products/`);

    dispatch(getProductListSuccess(data));
  } catch (error: any) {
    dispatch(getProductListError(error.message));
  }
};

export default productListSlice.reducer;
