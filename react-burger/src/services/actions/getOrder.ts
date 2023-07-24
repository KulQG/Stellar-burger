import {
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
} from "../../utils/constantsActions";
import { getCookie, postAddress } from "../../utils/consts";
import { AppDispatch, AppThunk } from "../types";
import { TArrayCards } from "../types/data";

export const getOrder: AppThunk = (arr: TArrayCards) => {
  return function (dispatch: AppDispatch) {
    const ids = () => {
      const idArr = arr.map((card) => card._id);
      return idArr;
    };
    dispatch({
      type: GET_ORDER,
    });
    fetch(postAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${getCookie("token")}`,
      },
      body: JSON.stringify({
        ingredients: ids(),
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_ORDER_FAILED,
          });
          console.log("ошибка при получении данных" + res.status);
        }
      })
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: data.order.number,
        });
      })
      .catch((err) => {
        dispatch({
          type: "GET_ORDER_FAILED",
        });
        console.log("ошибка" + err);
      });
  };
};
