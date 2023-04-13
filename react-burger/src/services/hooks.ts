import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { RootState, TAllActions } from "./types";
import { ThunkDispatch } from "redux-thunk";
import { ThunkAction } from "redux-thunk";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useDispatch = () => dispatchHook<ThunkDispatch<RootState, any, TAllActions>>();
