import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  UPDATE_TOKEN,
} from "../../utils/constantsActions";
import { getCookie, getUserAddress } from "../../utils/consts";
import { AppThunk } from "../types";
import { updateToken } from "./updateToken";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const getFetch = () => {
  return fetch(getUserAddress, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${getCookie("token")}`,
    },
  });
};

export const getUser: AppThunk = () => {
  return function (dispatch) {
    dispatch({
      type: GET_USER,
    });
    getFetch()
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
        setTimeout(() => {
          dispatch(updateToken());
        }, 20 * 60 * 1000);
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
        });
        console.log("ошибка" + err);
      });
  };
};

export function* getUserSaga() {
  try {
    const { data } = yield call(getFetch);
    yield put({
      type: GET_USER_SUCCESS,
      payload: data,
    });
    setTimeout(() => {
      put({type: UPDATE_TOKEN});
    }, 20 * 60 * 1000);
  } catch (error) {
    put({
      type: GET_USER_FAILED,
    });
    console.log("ошибка" + error);
  }
}
