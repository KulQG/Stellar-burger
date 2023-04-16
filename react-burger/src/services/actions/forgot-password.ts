import { POST_EMAIL, POST_EMAIL_FAILED, POST_EMAIL_SUCCESS } from "../../utils/constantsActions";
import { postEmailAddress } from "../../utils/consts";
import { AppDispatch, AppThunk } from "../types";

export const forgotPassword: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: POST_EMAIL });
    fetch(postEmailAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: POST_EMAIL_FAILED,
          });
          console.log("ошибка при получении данных" + res.status);
        }
      })
      .then((data) => {
        dispatch({
          type: POST_EMAIL_SUCCESS,
          postEmail: data.success,
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_EMAIL_FAILED,
        });
        console.log("ошибка" + err);
      });
  };
};
