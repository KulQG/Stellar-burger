import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
import { socketMiddleware } from "../../middlewares/socketMiddleware";
import { userSocketMiddleware } from "../../middlewares/userSocketMiddleware";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(), userSocketMiddleware())
);

export const store = createStore(rootReducer, enhancer);
