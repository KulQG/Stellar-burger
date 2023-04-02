import { OPEN_POPUP_ORDER_PAGE, OPEN_POPUP_INGR_PAGE } from "../actions/constants";

interface IPageHandler {
  page: "page" | "popup";
}

interface IPageHandlerAction {
  type: string;
}

const initialState: IPageHandler = {
  page: "page",
};

export const ingrPageHandler = (
  state = initialState,
  action: IPageHandlerAction
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
  action: IPageHandlerAction
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
