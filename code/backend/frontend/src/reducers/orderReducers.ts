import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";

interface IOrderCreateRequestAction {
  type: typeof ORDER_CREATE_REQUEST;
  loading: boolean;
}
interface IOrderCreateSuccessAction {
  type: typeof ORDER_CREATE_SUCCESS;
  loading: boolean;
  success: boolean;
  payload: any;
}
interface IOrderCreateFailAction {
  type: typeof ORDER_CREATE_FAIL;
  loading: boolean;
  error: any;
  payload: any;
}
interface IOrderCreateResetAction {
  type: typeof ORDER_CREATE_RESET;
}

type orderCreateAction =
  | IOrderCreateRequestAction
  | IOrderCreateSuccessAction
  | IOrderCreateFailAction
  | IOrderCreateResetAction;

export const orderCreateReducer = (state = {}, action: orderCreateAction) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };

    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

interface IOrderDetailsRequestAction {
  type: typeof ORDER_DETAILS_REQUEST;
  loading: boolean;
}
interface IOrderDetailsSuccessAction {
  type: typeof ORDER_DETAILS_SUCCESS;
  loading: boolean;
  success: boolean;
  payload: any;
}
interface IOrderDetailsFailAction {
  type: typeof ORDER_DETAILS_FAIL;
  loading: boolean;
  error: any;
  payload: any;
}

type orderDetailsAction =
  | IOrderDetailsRequestAction
  | IOrderDetailsSuccessAction
  | IOrderDetailsFailAction;

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action: orderDetailsAction
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

interface IOrderPayRequestAction {
  type: typeof ORDER_PAY_REQUEST;
  loading: boolean;
}
interface IOrderPaySuccessAction {
  type: typeof ORDER_PAY_SUCCESS;
  loading: boolean;
  success: boolean;
  payload: any;
}
interface IOrderPayFailAction {
  type: typeof ORDER_PAY_FAIL;
  loading: boolean;
  error: any;
  payload: any;
}
interface IOrderPayResetAction {
  type: typeof ORDER_PAY_RESET;
}

type orderPayAction =
  | IOrderPayRequestAction
  | IOrderPaySuccessAction
  | IOrderPayFailAction
  | IOrderPayResetAction;

export const orderPayReducer = (state = {}, action: orderPayAction) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };

    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};
interface IOrderDeliverRequestAction {
  type: typeof ORDER_DELIVER_REQUEST;
  loading: boolean;
}
interface IOrderDeliverSuccessAction {
  type: typeof ORDER_DELIVER_SUCCESS;
  loading: boolean;
  success: boolean;
  payload: any;
}
interface IOrderDeliverFailAction {
  type: typeof ORDER_DELIVER_FAIL;
  loading: boolean;
  error: any;
  payload: any;
}
interface IOrderDeliverResetAction {
  type: typeof ORDER_DELIVER_RESET;
}

type orderDeliverAction =
  | IOrderDeliverRequestAction
  | IOrderDeliverSuccessAction
  | IOrderDeliverFailAction
  | IOrderDeliverResetAction;

export const orderDeliverReducer = (state = {}, action:orderDeliverAction) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      };

    case ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_DELIVER_RESET:
      return {};

    default:
      return state;
  }
};
interface IOrderListMyRequestAction {
  type: typeof ORDER_LIST_MY_REQUEST;
  loading: boolean;
}
interface IOrderListMySuccessAction {
  type: typeof ORDER_LIST_MY_SUCCESS;
  loading: boolean;
  success: boolean;
  payload: any;
}
interface IOrderListMyFailAction {
  type: typeof ORDER_LIST_MY_FAIL;
  loading: boolean;
  error: any;
  payload: any;
}
interface IOrderListMyResetAction {
  type: typeof ORDER_LIST_MY_RESET;
}

type orderListMyAction =
  | IOrderListMyRequestAction
  | IOrderListMySuccessAction
  | IOrderListMyFailAction
  | IOrderListMyResetAction;

export const orderListMyReducer = (state = { orders: [] }, action:orderListMyAction) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };

    case ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_LIST_MY_RESET:
      return {
        orders: [],
      };

    default:
      return state;
  }
};

interface IOrderListRequestAction {
  type: typeof ORDER_LIST_REQUEST;
  loading: boolean;
}
interface IOrderListSuccessAction {
  type: typeof ORDER_LIST_SUCCESS;
  loading: boolean;
  success: boolean;
  payload: any;
}
interface IOrderListFailAction {
  type: typeof ORDER_LIST_FAIL;
  loading: boolean;
  error: any;
  payload: any;
}

type orderListAction =
  | IOrderListRequestAction
  | IOrderListSuccessAction
  | IOrderListFailAction
  ;

export const orderListReducer = (state = { orders: [] }, action:orderListAction) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };

    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
