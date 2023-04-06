import {
  AUTH,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from "../../../utils/constantsActions";

export interface IGetAuthAction {
  readonly type: typeof AUTH;
}

export interface IGetAuthFailedAction {
  readonly type: typeof AUTH_FAILED;
}

export interface IGetAuthSuccessAction {
  readonly type: typeof AUTH_SUCCESS;
  readonly payload: any
}

export type TGetAuthActions = 
    |IGetAuthAction
    |IGetAuthFailedAction
    |IGetAuthSuccessAction
