import { takeEvery, all, call } from "redux-saga/effects";
import {
  GET_FEED,
  GET_USER,
  UPDATE_TOKEN,
} from "../utils/constantsActions";
import { getFeedSaga } from "./actions/getFeed";
import { getUserSaga } from "./actions/getUser";
import { updateTokenSaga } from "./actions/updateToken";

export const rootSaga = function* root() {
  yield all([call(getFeedWatcher), call(getUserWatcher), call(updateTokenWatcher)]);
};

export function* getFeedWatcher() {
  yield takeEvery(GET_FEED, getFeedSaga);
}

export function* getUserWatcher() {
  yield takeEvery(GET_USER, getUserSaga);
}

export function* updateTokenWatcher() {
  yield takeEvery(UPDATE_TOKEN, updateTokenSaga);
}
