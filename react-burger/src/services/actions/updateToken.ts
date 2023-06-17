import {
  GET_USER,
  UPDATE_TOKEN,
  UPDATE_TOKEN_FAILED,
  UPDATE_TOKEN_SUCCESS,
} from "../../utils/constantsActions";
import { updateCookieAddress, setCookie } from "../../utils/consts";
import { call, put } from "redux-saga/effects";

const getFetch = async () => {
  try {
    const res = await fetch(updateCookieAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log("error " + err);
  }
};

export function* updateTokenSaga() {
  try {
    const { data } = yield call(getFetch);
    yield put({
      type: UPDATE_TOKEN_SUCCESS,
      payload: data,
    });
    console.log(data);
    let authToken = data.accessToken;
    setCookie("token", authToken, { path: "/" });
    localStorage.clear();
    const refreshToken = data.refreshToken;
    localStorage.setItem("refreshToken", refreshToken);
    put({ type: GET_USER });
  } catch (error) {
    put({
      type: UPDATE_TOKEN_FAILED,
    });
    console.log("ошибка" + error);
  }
}
