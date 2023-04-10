import {
  POST_PASSWORD,
  POST_PASSWORD_FAILED,
  POST_PASSWORD_SUCCESS,
} from "../../../utils/constantsActions";

interface IPostPasswordAction {
  readonly type: typeof POST_PASSWORD;
}

interface IPostPasswordFailedAction {
  readonly type: typeof POST_PASSWORD_FAILED;
}

interface IPostPasswordSuccessAction {
  readonly type: typeof POST_PASSWORD_SUCCESS;
  readonly postPassword: {
    success: boolean;
  };
}

export type TPostPasswordActions =
  | IPostPasswordAction
  | IPostPasswordFailedAction
  | IPostPasswordSuccessAction;
