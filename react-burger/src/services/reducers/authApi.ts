interface IState {
  authRequest: boolean;
  authFailed: boolean;
  auth: { success: boolean } | string;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IState = {
  authRequest: false,
  authFailed: false,
  auth: {
    success: false,
  },
};

export const authReducer = (state = initialState, action: IAction): IState => {
  switch (action.type) {
    case "AUTH": {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case "AUTH_SUCCESS": {
      return {
        ...state,
        authFailed: false,
        auth: action.payload,
        authRequest: false,
      };
    }
    case "AUTH_FAILED": {
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
