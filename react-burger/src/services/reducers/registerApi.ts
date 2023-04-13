import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../../utils/constantsActions";
import { TRegisterActions } from "../actions/constsActions/register";
import { IInitialStateEmailForRegister } from "../types/data";

const initialStateEmail: IInitialStateEmailForRegister = {
  registerRequest: false,
  registerFailed: false,
  register: {
    success: false,
  },
};

export const registerReducer = (
  state = initialStateEmail,
  action: TRegisterActions
) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerFailed: false,
        register: action.payload,
        registerRequest: false,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false,
        register: {success: false},
      };
    }
    default: {
      return state;
    }
  }
};
