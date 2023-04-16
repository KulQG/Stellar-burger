import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  DELETE_USER
} from "../../../utils/constantsActions";

interface IGetUserAction {
  readonly type: typeof GET_USER;
}

interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: {
    success: boolean;
    user: {
      email: string;
      name: string;
    };
  };
}

interface IDeleteUserAction {
    readonly type: typeof DELETE_USER;
}

export type TGetUserActions = 
    |IGetUserAction
    |IGetUserFailedAction
    |IGetUserSuccessAction
    |IDeleteUserAction
