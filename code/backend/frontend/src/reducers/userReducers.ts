import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
} from "../constants/userConstants";

interface IUserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST;
  loading?: boolean;
}
interface IUserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;

  loading: boolean;
  userInfo: any;
  payload: any;
}
interface IUserLoginFail {
  type: typeof USER_LOGIN_FAIL;
  loading: boolean;
  payload: any;
  error: any;
}

interface IUserLogout {
  type: typeof USER_LOGOUT;
}

type userLoginAction =
  | IUserLoginRequestAction
  | IUserLoginSuccessAction
  | IUserLoginFail
  | IUserLogout;

export const userLoginReducer = (state = {}, action: userLoginAction) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
interface IUserRegisterRequestAction {
    type: typeof USER_REGISTER_REQUEST;
    loading?: boolean;
  }
  interface IUserRegisterSuccessAction {
    type: typeof USER_REGISTER_SUCCESS;
  
    loading: boolean;
    userInfo: any;
    payload: any;
  }
  interface IUserRegisterFail {
    type: typeof USER_REGISTER_FAIL;
    loading: boolean;
    payload: any;
    error: any;
  }
  
  interface IUserLogout {
    type: typeof USER_LOGOUT;
  }
  
  type userRegisterAction =
    | IUserRegisterRequestAction
    | IUserRegisterSuccessAction
    | IUserRegisterFail
    | IUserLogout;
  
export const userRegisterReducer = (state = {}, action:userRegisterAction) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
interface IUserDetailsRequestAction {
    type: typeof USER_DETAILS_REQUEST;
    loading?: boolean;
  }
  interface IUserDetailsSuccessAction {
    type: typeof USER_DETAILS_SUCCESS;
  
    loading: boolean;
    userInfo: any;
    payload: any;
  }
  interface IUserDetailsFail {
    type: typeof USER_DETAILS_FAIL;
    loading: boolean;
    payload: any;
    error: any;
  }
  
  interface IUserReset {
    type: typeof USER_DETAILS_RESET;
  }
  
  type userDetailsAction =
    | IUserDetailsRequestAction
    | IUserDetailsSuccessAction
    | IUserDetailsFail
    | IUserReset;
  
export const userDetailsReducer = (state = { user: {} }, action:userDetailsAction) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case USER_DETAILS_RESET:
      return { user: {} };

    default:
      return state;
  }
};
interface IUserUpdateProfileRequestAction {
    type: typeof USER_UPDATE_PROFILE_REQUEST;
    loading?: boolean;
  }
  interface IUserUpdateProfileSuccessAction {
    type: typeof USER_UPDATE_PROFILE_SUCCESS;
  
    loading: boolean;
    userInfo: any;
    payload: any;
  }
  interface IUserUpdateProfileFail {
    type: typeof USER_UPDATE_PROFILE_FAIL;
    loading: boolean;
    payload: any;
    error: any;
  }
  
  interface IUserUpdateProfileReset {
    type: typeof USER_UPDATE_PROFILE_RESET;
  }
  
  type userUpdateProfileAction =
    | IUserUpdateProfileRequestAction
    | IUserUpdateProfileSuccessAction
    | IUserUpdateProfileFail
    | IUserUpdateProfileReset;
  
export const userUpdateProfileReducer = (state = {}, action:userUpdateProfileAction) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };

    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    case USER_UPDATE_PROFILE_RESET:
      return {};

    default:
      return state;
  }
};
