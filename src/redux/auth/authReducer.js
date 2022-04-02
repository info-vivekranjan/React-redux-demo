import { getLocalData, setLocalData } from "../../utils/localStorage";
import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOADING,
  LOGOUT_SUCCESS,
} from "./authActionTypes";

const InitialState = {
  authSuccess: false,
  authFailure: false,
  authLoading: false,
  authData:[],
  failureData:'',
  logoutSuccess:false
};

export const authReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        authLoading:false,
        authSuccess: true,
        authFailure:false,
        authData: payload
      };
    case AUTH_FAILURE:
      return {
        ...state,
        authLoading: false,
        authFailure: true,
        failureData: payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authSuccess: false,
        logoutSuccess: true,
      };
    default:
      return state;
  }
};
