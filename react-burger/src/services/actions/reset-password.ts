import { POST_PASSWORD, POST_PASSWORD_FAILED, POST_PASSWORD_SUCCESS } from "../../utils/constantsActions";
import { resetPasswordAddress } from "../../utils/consts";
import { AppDispatch, AppThunk } from "../types";

export const resetPassword: AppThunk = (password: string, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: POST_PASSWORD });
    fetch(resetPasswordAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: POST_PASSWORD_FAILED,
          });
          console.log("ошибка при получении данных" + res.status);
        }
      })
      .then((data) => {
        dispatch({
          type: POST_PASSWORD_SUCCESS,
          postPassword: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_PASSWORD_FAILED,
        });
        console.log("ошибка" + err);
      });
  };
};
