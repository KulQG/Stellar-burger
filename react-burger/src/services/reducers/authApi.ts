import { AUTH, AUTH_SUCCESS, AUTH_FAILED } from "../../utils/constantsActions";
import { IAction, IStateForAuth } from "../types/data";

const initialState: IStateForAuth = {
  authRequest: false,
  authFailed: false,
  auth: {
    success: false,
  },
};

export const authReducer = (
  state = initialState,
  action: IAction
): IStateForAuth => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        authFailed: false,
        auth: action.payload,
        authRequest: false,
      };
    }
    case AUTH_FAILED: {
      return {
        ...state,
        authFailed: true,
        authRequest: false,
        auth: "ошибка получения данных",
      };
    }
    default: {
      return state;
    }
  }
};
