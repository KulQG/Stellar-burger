import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
  USER_WS_CONNECTION_CLOSE,
  USER_WS_CONNECTION_CLOSED,
  USER_WS_CONNECTION_ERROR,
  USER_WS_CONNECTION_SUCCESS,
  USER_WS_GET_MESSAGE,
} from "../../utils/constantsActions";
import {
  IInitialStateStringBool,
  IWsState,
  IWsAction,
  IAction,
} from "../types/data";

const initialState: IWsState = {
  wsConnected: false,
  orders: {
    orders: [],
  },
  error: "",
};

export const wsReducer = (state = initialState, action: IWsAction) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: "",
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: "",
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSE: {
      return {
        ...state,
        error: "",
        wsConnected: false,
      };
    }
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: "",
        orders: action.payload,
      };
    default:
      return state;
  }
};

export const userWsReducer = (state = initialState, action: IWsAction) => {
  switch (action.type) {
    case USER_WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case USER_WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case USER_WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    case USER_WS_CONNECTION_CLOSE: {
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    }
    case USER_WS_GET_MESSAGE:
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

const currentSocket: IInitialStateStringBool = {
  feed: false,
  orders: false,
};

export const checkOpenWs = (state = currentSocket, action: IAction) => {
  switch (action.type) {
    case USER_WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        feed: false,
        orders: true,
      };
    }
    case WS_CONNECTION_SUCCESS: {
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
