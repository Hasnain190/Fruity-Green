import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,

    CART_SAVE_PAYMENT_METHOD,

    CART_CLEAR_ITEMS,
} from '../constants/cartConstants'





interface ICartItem {
    product: string;
    quantity: number;
    price: number;
  }
  
  interface ICartState {
    cartItems: ICartItem[];
    shippingAddress: {
      city: string;
      address: string;
      postalCode: string;
    };
    paymentMethod?: string;
  }
  
  type CartActionTypes =
    | { type: typeof CART_ADD_ITEM; payload: ICartItem }
    | { type: typeof CART_REMOVE_ITEM; payload: string }
    | { type: typeof CART_SAVE_SHIPPING_ADDRESS; payload: ICartState["shippingAddress"] }
    | { type: typeof CART_SAVE_PAYMENT_METHOD ; payload: string }
    | { type: typeof CART_CLEAR_ITEMS };
  
  const initialState: ICartState = {
    cartItems: [],
    shippingAddress: { city: "", address: "", postalCode: "" }
  };
  
export const cartReducer = (state = initialState, action:CartActionTypes):ICartState  => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }

        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }

        case CART_CLEAR_ITEMS:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state
    }
}