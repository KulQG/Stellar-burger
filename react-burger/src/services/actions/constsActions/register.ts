import {
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../../../utils/constantsActions";

interface IRgisterAction {
  readonly type: typeof REGISTER;
}

interface IRgisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}

interface IRgisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  readonly payload: { success: boolean };
}

export type TRegisterActions =
  | IRgisterAction
  | IRgisterFailedAction
  | IRgisterSuccessAction;
