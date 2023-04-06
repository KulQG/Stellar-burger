import { AnyAction, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store/store";
import { TGetFeedActions } from "../actions/constsActions/feed";
import { TGetOrderActions } from "../actions/constsActions/order";
import { TGetAuthActions } from "../actions/constsActions/auth";
import { TGetUserActions } from "../actions/constsActions/user";
import { TPostEmailActions } from "../actions/constsActions/postEmail";
import { TRegisterActions } from "../actions/constsActions/register";
import { TPostPasswordActions } from "../actions/constsActions/postPassword";
import { TUpdateActions } from "../actions/constsActions/updateToken";
import { TNotThunkActions } from "../actions/constsActions/notThunk";

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions =
  | TGetFeedActions
  | TGetOrderActions
  | TGetAuthActions
  | TGetUserActions
  | TPostEmailActions
  | TRegisterActions
  | TPostPasswordActions
  | TUpdateActions;

type TAllActions = TApplicationActions | TNotThunkActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, Action, TAllActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = ThunkDispatch<
  RootState,
  any,
  TAllActions | AnyAction
>;
