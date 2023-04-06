import {
  LOGOUT_FAILED,
  POST_EMAIL,
  POST_EMAIL_FAILED,
  POST_EMAIL_SUCCESS,
} from "../../../utils/constantsActions";

interface IPostEmailAction {
  readonly type: typeof POST_EMAIL;
}

interface IPostEmailFailedAction {
  readonly type: typeof POST_EMAIL_FAILED;
}

interface IPostEmailSuccessAction {
  readonly type: typeof POST_EMAIL_SUCCESS;
  readonly postEmail: any;
}

interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export type TPostEmailActions =
  | IPostEmailAction
  | IPostEmailFailedAction
  | IPostEmailSuccessAction
  | ILogoutFailedAction;
