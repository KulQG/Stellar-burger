import {
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../../utils/constantsActions";
import { registerAddress } from "../../utils/consts";
import { AppDispatch, AppThunk } from "../types";

export const register: AppThunk = ([email, password, name]: [
  string,
  string,
  string
]) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: REGISTER });
    fetch(registerAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: REGISTER_FAILED,
          });
          console.log("ошибка при получении данных" + res.status);
        }
      })
      .then((data) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILED,
        });
        console.log("ошибка" + err);
      });
  };
};
