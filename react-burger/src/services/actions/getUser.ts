import {
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  UPDATE_TOKEN,
} from "../../utils/constantsActions";
import { getCookie, getUserAddress } from "../../utils/consts";
import { call, put } from "redux-saga/effects";

const getFetch = async () => {
  try {
    const res = await fetch(getUserAddress, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${getCookie("token")}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return { data };
    } else {
      throw new Error("Error fetching data: " + res.status);
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

export function* getUserSaga() {
  try {
    const { data } = yield call(getFetch);
    yield put({
      type: GET_USER_SUCCESS,
      payload: data,
    });
    yield setTimeout(() => {
      put({ type: UPDATE_TOKEN });
    }, 20 * 60 * 1000);
  } catch (error) {
    yield put({
      type: GET_USER_FAILED,
    });
    yield put({ type: UPDATE_TOKEN });
    console.log("Error:", error);
  }
}