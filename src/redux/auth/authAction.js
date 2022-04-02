import axios from "axios";
import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOADING,
  LOGOUT_SUCCESS,
} from "./authActionTypes";

//signup part
export const authLoading = () => ({
  type: AUTH_LOADING,
});

export const authFailure = (payload) => ({
  type: AUTH_FAILURE,
  payload,
});

export const authSuccess = (payload) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const authLogin = (payload) => (dispatch) => {
  //we are dispatching the request  action here
  const requestAction = authLoading();
  dispatch(requestAction);
  return axios
    .get("http://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //dispatching success action here
      const successAction = authSuccess(res.data);
      dispatch(successAction);
      console.log(res.data);
    })
    .catch((error) => {
      //dispatching error action here
      const failureAction = authFailure(error);
      dispatch(failureAction);
    });
};