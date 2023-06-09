import { address } from "../../utils/consts";
import {
  GET_FEED,
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
} from "../../utils/constantsActions";
import { AppDispatch, AppThunk } from "../types";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const getItems = () => {
  return fetch(address)
}

export const getFeed: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_FEED,
    });
    getItems()
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_FEED_FAILED,
          });
          console.log("ошибка при получении данных" + res.status);
        }
      })
      .then((data) => {
        dispatch({
          type: GET_FEED_SUCCESS,
          feed: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_FEED_FAILED,
        });
        console.log("ошибка" + err);
      });
  };
};

export function* getFeedSaga() {
  try {
    const {data} = yield call(getItems)
    yield put({
      type: GET_FEED_SUCCESS,
      feed: data.data,
    });
  } catch (error) {
    put({
      type: GET_FEED_FAILED,
    });
    console.log("ошибка" + error);
  }
}