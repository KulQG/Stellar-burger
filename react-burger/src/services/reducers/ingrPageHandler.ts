import {
  OPEN_POPUP_ORDER_PAGE,
  OPEN_POPUP_INGR_PAGE,
} from "../../utils/constantsActions";
import {
  IOpenPopupIngrAction,
  IOpenPopupOrderAction,
} from "../actions/constsActions/notThunk";
import { IPageHandler } from "../types/data";

const initialState: IPageHandler = {
  page: "page",
};

export const ingrPageHandler = (
  state = initialState,
  action: IOpenPopupIngrAction
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
  action: IOpenPopupOrderAction
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
