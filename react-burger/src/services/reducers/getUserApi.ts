import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, DELETE_USER } from "../actions/constants";
import { IAction, IGetUserInitial } from "../types/data";

const initialState: IGetUserInitial = {
  getUserRequest: false,
  getUserFailed: false,
  getUser: {
    success: false,
  },
}

export const getUserReducer = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserFailed: false,
        getUser: action.payload,
        getUserRequest: false,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserFailed: true,
        getUserRequest: false,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        getUser: {
          success: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
