interface IGetUserInitial {
  getUserRequest: boolean;
  getUserFailed: boolean;
  getUser: {
    success: boolean;
  };
}

const initialState: IGetUserInitial = {
  getUserRequest: false,
  getUserFailed: false,
  getUser: {
    success: false,
  },
}

export const getUserReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "GET_USER": {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case "GET_USER_SUCCESS": {
      return {
        ...state,
        getUserFailed: false,
        getUser: action.payload,
        getUserRequest: false,
      };
    }
    case "GET_USER_FAILED": {
      return {
        ...state,
        getUserFailed: true,
        getUserRequest: false,
      };
    }
    case "DELETE_USER": {
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
