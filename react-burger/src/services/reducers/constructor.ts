import { GET_FILLING } from "../../utils/constantsActions";
import { IGetFillingAction } from "../actions/constsActions/notThunk";
import { TArrayCards, TCard, TDraggedCard } from "../types/data";

const constructor: { fill: Array<TDraggedCard> } = {
  fill: [],
};

export const getConstructor = (
  state = constructor,
  action: IGetFillingAction
) => {
  switch (action.type) {
    case GET_FILLING: {
      return {
        fill: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
