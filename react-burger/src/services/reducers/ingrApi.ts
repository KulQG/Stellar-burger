interface IInitialStateFeed {
  feedRequest: boolean;
  feedFailed: boolean;
  feed: any[];
}

const initialStateFeed: IInitialStateFeed = {
  feedRequest: false,
  feedFailed: false,
  feed: [],
}

export const feedReducer = (
  state = initialStateFeed,
  action: { type: string; feed: any }
) => {
  switch (action.type) {
    case "GET_FEED": {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false,
      };
    }
    case "GET_FEED_SUCCESS": {
      return {
        ...state,
        feed: action.feed,
        feedRequest: false,
      };
    }
    case "GET_FEED_FAILED": {
      return {
        ...state,
        feedFailed: true,
        feedRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
