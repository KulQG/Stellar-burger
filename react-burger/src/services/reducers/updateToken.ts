import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_FAILED,
  UPDATE_TOKEN_SUCCESS,
} from "../../utils/constantsActions";

interface updateTokenState {
  updateTokenRequest: boolean;
  updateTokenFailed: boolean;
  updateToken: {
    success: boolean;
  };
}

const initialState: updateTokenState = {
  updateTokenRequest: false,
  updateTokenFailed: false,
  updateToken: {
    success: false,
  },
};

export const updateTokenReducer = (
  state = initialState,
  action: {
    type: string;
    payload: string;
  }
) => {
  switch (action.type) {
    case UPDATE_TOKEN: {
      return {
        ...state,
        updateTokenRequest: true,
        updateTokenFailed: false,
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        updateTokenFailed: false,
        updateToken: action.payload,
        updateTokenRequest: false,
      };
    }
    case UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        updateTokenFailed: true,
        updateTokenRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
