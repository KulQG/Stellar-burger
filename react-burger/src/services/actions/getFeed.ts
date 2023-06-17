import { address } from "../../utils/consts";
import {
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
} from "../../utils/constantsActions";
import { call, put } from "redux-saga/effects";

const getItems = async () => {
  try {
    const response = await fetch(address);
    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      throw new Error("Request failed with status " + response.status);
    }
  } catch (error) {
    console.log(`Error:, ${error}`);
  }
};

export function* getFeedSaga() {
  try {
    const { data } = yield call(getItems);
    console.log(data);
    yield put({
      type: GET_FEED_SUCCESS,
      feed: data.data,
    });
  } catch (error) {
    yield put({
      type: GET_FEED_FAILED,
    });
    console.log("Error:", error);
  }
}
