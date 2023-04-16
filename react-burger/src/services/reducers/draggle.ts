import {
  UPDATE_FILL,
  UPDATE_BUN,
  DELETE_FILL,
  SORTING,
} from "../../utils/constantsActions";
import {
  IDeleteFillAction,
  ISortFillAction,
  IUpdateBunAction,
  IUpdateFillAction,
} from "../actions/constsActions/notThunk";
import {
  TDraggedCard,
  TDraggedCardState,
} from "../types/data";

const initialState: TDraggedCardState = {
  ingredients: [],
  buns: {
    _id: "60d3b41abdacab0026a733c6",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
    id: "id",
  },
};

type TDragActions =
  | IUpdateFillAction
  | IUpdateBunAction
  | IDeleteFillAction
  | ISortFillAction;

export const drag = (state = initialState, action: TDragActions) => {
  switch (action.type) {
    case UPDATE_FILL: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case UPDATE_BUN: {
      return {
        ...state,
        buns: action.payload,
      };
    }
    case DELETE_FILL: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item: TDraggedCard) => item.id !== action.payload
        ),
      };
    }
    case SORTING: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
