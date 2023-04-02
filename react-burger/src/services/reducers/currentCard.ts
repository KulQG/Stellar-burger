import { GET_CURRENT_CARD, REMOVE_CURRENT_CARD } from "../actions/constants";

const currentCardState: { post: null | unknown } = {
  post: null,
};

export const currentCard = (
  state = currentCardState,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case GET_CURRENT_CARD: {
      return {
        post: action.payload,
      };
    }
    case REMOVE_CURRENT_CARD: {
      return {
        post: null,
      };
    }
    default: {
      return state;
    }
  }
};
