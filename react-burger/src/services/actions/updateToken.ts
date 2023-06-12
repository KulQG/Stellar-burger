import {
  GET_USER,
  UPDATE_TOKEN,
  UPDATE_TOKEN_FAILED,
  UPDATE_TOKEN_SUCCESS,
} from "../../utils/constantsActions";
import { updateCookieAddress, setCookie } from "../../utils/consts";
import { AppDispatch, AppThunk } from "../types";
import { getUserSaga } from "./getUser";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const getFetch = () => {
  return fetch(updateCookieAddress, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
}

// export const updateToken: AppThunk = () => {
//   return function (dispatch: AppDispatch) {
//     dispatch({ type: UPDATE_TOKEN });
//     getFetch()
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           dispatch({
//             type: UPDATE_TOKEN_FAILED,
//           });
//           console.log("ошибка при получении данных" + res.status);
//         }
//       })
//       .then((data) => {
//         dispatch({
//           type: UPDATE_TOKEN_SUCCESS,
//           payload: data,
//         });
//         console.log(data);
//         let authToken = data.accessToken;
//         setCookie("token", authToken, { path: "/" });
//         localStorage.clear();
//         const refreshToken = data.refreshToken;
//         localStorage.setItem("refreshToken", refreshToken);
//         dispatch(getUser());
//       })
//       .catch((err) => {
//         dispatch({
//           type: UPDATE_TOKEN_FAILED,
//         });
//         console.log("ошибка" + err);
//       });
//   };
// };

export function* updateTokenSaga() {
  try {
    const {data} = yield call(getFetch)
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
    put({type: GET_USER})
  } catch (error) {
    put({
      type: UPDATE_TOKEN_FAILED,
    });
    console.log("ошибка" + error);
  }
}
