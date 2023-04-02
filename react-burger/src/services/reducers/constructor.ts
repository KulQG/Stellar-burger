import { GET_FILLING } from "../../utils/constantsActions";

const constructor: {fill: Array<any>} = {
  fill: [],
}

export const getConstructor = (state = constructor, action: {type: string, payload?: any[]}) => {
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
