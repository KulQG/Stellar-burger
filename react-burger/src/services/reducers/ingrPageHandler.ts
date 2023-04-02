import { OPEN_POPUP_ORDER_PAGE, OPEN_POPUP_INGR_PAGE } from "../actions/constants";
import { IAction } from "../types/data";
import { IPageHandler } from "../types/data";

const initialState: IPageHandler = {
  page: "page",
};

export const ingrPageHandler = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case OPEN_POPUP_INGR_PAGE: {
      return {
        ...state,
        page: "popup",
      };
    }
    default: {
      return state;
    }
  }
};

const orderState: IPageHandler = {
  page: "page",
};

export const orderPageHandler = (
  state = orderState,
  action: IAction
) => {
  switch (action.type) {
    case OPEN_POPUP_ORDER_PAGE: {
      return {
        ...state,
        page: "popup",
      };
    }
    default: {
      return state;
    }
  }
};
