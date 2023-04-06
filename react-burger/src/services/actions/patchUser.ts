import { GET_USER, GET_USER_FAILED, GET_USER_SUCCESS } from "../../utils/constantsActions";
import { getCookie, getUserAddress } from "../../utils/consts";
import { AppDispatch, AppThunk } from "../types";
import { updateToken } from "./updateToken";

export const patchUser: AppThunk = ([email, name, password]: [
  string,
  string,
  string
]) => {
  return function (dispatch) {
    dispatch({
      type: GET_USER,
    });
    fetch(getUserAddress, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `${getCookie("token")}`,
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_USER_FAILED,
          });
          dispatch(updateToken());
          console.log("ошибка при получении данных" + res.status);
        }
      })
      .then((data) => {
        if (data) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
        });
        console.log("ошибка" + err);
      });
  };
};
