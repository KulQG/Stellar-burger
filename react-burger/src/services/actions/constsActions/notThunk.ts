import {
    CLOSE_POPUP,
  DELETE_FILL,
  GET_CURRENT_CARD,
  GET_FILLING,
  OPEN_POPUP,
  OPEN_POPUP_INGR_PAGE,
  OPEN_POPUP_ORDER_PAGE,
  REMOVE_CURRENT_CARD,
  SET_INGR_POPUP,
  SET_ORDER_INFO_POPUP,
  SET_ORDER_POPUP,
  SORTING,
  UPDATE_BUN,
  UPDATE_FILL,
  USER_WS_CONNECTION_CLOSE,
  USER_WS_CONNECTION_START,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_START,
} from "../../../utils/constantsActions";
import { TCard } from "../../types/data";

interface IGetFillingAction {
  readonly type: typeof GET_FILLING;
  readonly payload: any[];
}

interface IGetCurCardAction {
  readonly type: typeof GET_CURRENT_CARD;
  readonly payload: TCard;
}

interface IRemoveCurCardAction {
  readonly type: typeof REMOVE_CURRENT_CARD;
}

interface IUpdateFillAction {
  readonly type: typeof UPDATE_FILL;
  readonly payload: TCard;
}

interface IUpdateBunAction {
  readonly type: typeof UPDATE_BUN;
  readonly payload: TCard;
}

interface IDeleteFillAction {
  readonly type: typeof DELETE_FILL;
  readonly payload: TCard;
}

interface ISortFillAction {
  readonly type: typeof SORTING;
  readonly payload: TCard;
}

interface IOpenPopupOrderAction {
  readonly type: typeof OPEN_POPUP_ORDER_PAGE;
}

interface IOpenPopupIngrAction {
  readonly type: typeof OPEN_POPUP_INGR_PAGE;
}

interface ISetPopupIngrAction {
  readonly type: typeof SET_INGR_POPUP;
}

interface ISetPopupOrderAction {
  readonly type: typeof SET_ORDER_POPUP;
}

interface ISetPopupOrderInfoAction {
  readonly type: typeof SET_ORDER_INFO_POPUP;
}

interface IOpenPopupAction {
  readonly type: typeof OPEN_POPUP;
}

interface IClosePopupAction {
  readonly type: typeof CLOSE_POPUP;
}

interface IWsConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START
}

interface IWsConnectionCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSE;
}

interface IUserWsConnectionStartAction {
  readonly type: typeof USER_WS_CONNECTION_START
}

interface IUserWsConnectionCloseAction {
  readonly type: typeof USER_WS_CONNECTION_CLOSE;
}

export type TNotThunkActions =
  | IGetFillingAction
  | IGetCurCardAction
  | IRemoveCurCardAction
  | IUpdateFillAction
  | IUpdateBunAction
  | IDeleteFillAction
  | ISortFillAction
  | IOpenPopupOrderAction
  | IOpenPopupIngrAction
  | ISetPopupIngrAction
  | ISetPopupOrderAction
  | ISetPopupOrderInfoAction
  | IOpenPopupAction
  | IClosePopupAction
  | IWsConnectionStartAction
  | IWsConnectionCloseAction
  | IUserWsConnectionStartAction
  | IUserWsConnectionCloseAction;
