import {
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
} from "../../utils/constantsActions";
import { IInitialStateOrder } from "../types/data";

const initialStateOrder: IInitialStateOrder = {
  orderRequest: false,
  orderFailed: false,
  order: null,
};

export const orderReducer = (
  state = initialStateOrder,
  action: { type: string; order: number | string }
) => {
  switch (action.type) {
    case GET_ORDER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        orderFailed: false,
        order: action.order,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
        order: "ошибка получения данных",
      };
    }
    default: {
      return state;
    }
  }
};
