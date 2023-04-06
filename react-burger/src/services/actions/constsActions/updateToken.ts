import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_FAILED,
  UPDATE_TOKEN_SUCCESS,
} from "../../../utils/constantsActions";

interface IUpdateTokenAction {
  readonly type: typeof UPDATE_TOKEN;
}

interface IUpdateTokenFailedAction {
  readonly type: typeof UPDATE_TOKEN_FAILED;
}

interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
  readonly payload:
    | {
        success: boolean;
        accessToken: string;
        refreshToken: string;
      }
    | null
    | string;
}

export type TUpdateActions =
  | IUpdateTokenAction
  | IUpdateTokenFailedAction
  | IUpdateTokenSuccessAction;
