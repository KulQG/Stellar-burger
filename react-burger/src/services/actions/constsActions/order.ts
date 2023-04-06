import {
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
} from "../../../utils/constantsActions";

export interface IGetOrderAction {
    readonly type: typeof GET_ORDER;
}

export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: string | number
}

export type TGetOrderActions = 
    | IGetOrderAction
    | IGetOrderFailedAction
    | IGetOrderSuccessAction;