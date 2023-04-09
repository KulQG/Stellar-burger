import { GET_FILLING } from "../../utils/constantsActions";
import { TArrayCards } from "../types/data";

const constructor: {fill: TArrayCards | []} = {
  fill: [],
}

export const getConstructor = (state = constructor, action: {type: string, payload?: TArrayCards | []}) => {
  switch (action.type) {
    case GET_FILLING: {
      return {
        fill: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
