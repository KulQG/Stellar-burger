import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
//import { AppDispatch, AppThunk, RootState } from "./types";
import { AppThunk, AppDispatch, RootState } from "./types";
import { Dispatch } from "react";
import { AnyAction } from "redux";


// Теперь этот хук знает структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

// Хук не даст отправить экшен, который ему не знаком
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
