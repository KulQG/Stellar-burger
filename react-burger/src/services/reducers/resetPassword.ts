import {
  POST_PASSWORD,
  POST_PASSWORD_SUCCESS,
  POST_PASSWORD_FAILED,
} from "../../utils/constantsActions";

interface IResetPasswordState {
  postPasswordRequest: boolean;
  postPasswordFailed: boolean;
  postPassword: {
    success: boolean;
  };
}

const initialState: IResetPasswordState = {
  postPasswordRequest: false,
  postPasswordFailed: false,
  postPassword: {
    success: false,
  },
};

export const resetPasswordReducer = (
  state = initialState,
  action: { type: string; postPassword: string | null }
) => {
  switch (action.type) {
    case POST_PASSWORD: {
      return {
        ...state,
        postPasswordRequest: true,
        postPasswordFailed: false,
      };
    }
    case POST_PASSWORD_SUCCESS: {
      return {
        ...state,
        postPasswordFailed: false,
        postPassword: action.postPassword,
        postPasswordRequest: false,
      };
    }
    case POST_PASSWORD_FAILED: {
      return {
        ...state,
        postPasswordFailed: true,
        postPasswordRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
