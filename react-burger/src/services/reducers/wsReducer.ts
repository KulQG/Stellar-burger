interface IWsState {
  wsConnected: boolean;
  orders: {
    success: boolean;
    orders: any[];
  };
  error: undefined | string;
}

const initialState: IWsState = {
  wsConnected: false,
  orders: {
    success: false,
    orders: [],
  },
  error: undefined,
};

interface IWsAction {
  type: string;
  payload: string | any[];
}

export const wsReducer = (state = initialState, action: IWsAction) => {
  switch (action.type) {
    case "WS_CONNECTION_SUCCESS":
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case "WS_CONNECTION_ERROR":
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case "WS_CONNECTION_CLOSED":
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    case "WS_CONNECTION_CLOSE": {
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    }
    case "WS_GET_MESSAGE":
      return {
        ...state,
        error: undefined,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export const userWsReducer = (state = initialState, action: IWsAction) => {
  switch (action.type) {
    case "USER_WS_CONNECTION_SUCCESS":
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case "USER_WS_CONNECTION_ERROR":
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case "USER_WS_CONNECTION_CLOSED":
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    case "USER_WS_CONNECTION_CLOSE": {
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    }
    case "USER_WS_GET_MESSAGE":
      return {
        ...state,
        error: undefined,
        orders: action.payload,
      };
    default:
      return state;
  }
};

//Создать конструкцию которая бы выдавала какое соединение открыто,
//и при открытии/закрытии обновлялось состояние

interface ICurrentSocketState {
  feed: boolean;
  orders: boolean;
}

const currentSocket:ICurrentSocketState = {
  feed: false,
  orders: false,
};

export const checkOpenWs = (state = currentSocket, action: {type: string}) => {
  switch (action.type) {
    case "USER_WS_CONNECTION_SUCCESS": {
      return {
        ...state,
        feed: false,
        orders: true,
      };
    }
    case "WS_CONNECTION_SUCCESS": {
      return {
        ...state,
        feed: true,
        orders: false,
      };
    }
    default:
      return state;
  }
};
