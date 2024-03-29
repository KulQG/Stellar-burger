import {
  SET_INGR_POPUP,
  SET_ORDER_INFO_POPUP,
  SET_ORDER_POPUP,
  OPEN_POPUP,
  CLOSE_POPUP,
} from "../../utils/constantsActions";
import { IAction } from "../types/data";
import { IInitialStateStringBool } from "../types/data";

const initialState: IInitialStateStringBool = {
  ingr: false,
  order: false,
  orderInfo: false,
};

export const checkPopup = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_INGR_POPUP: {
      return {
        ...state,
        ingr: true,
        order: false,
        orderInfo: false,
      };
    }
    case SET_ORDER_POPUP: {
      return {
        ...state,
        ingr: false,
        order: true,
        orderInfo: false,
      };
    }
    case SET_ORDER_INFO_POPUP: {
      return {
        ...state,
        ingr: false,
        order: false,
        orderInfo: true,
      };
    }
    default: {
      return state;
    }
  }
};

const setPopupState: { popupState: boolean } = {
  popupState: false,
};
export const setPopup = (state = setPopupState, action: IAction) => {
  switch (action.type) {
    case OPEN_POPUP: {
      return {
        ...state,
        popupState: true,
      };
    }
    case CLOSE_POPUP: {
      return {
        ...state,
        popupState: false,
      };
    }
    default: {
      return state;
    }
  }
};
