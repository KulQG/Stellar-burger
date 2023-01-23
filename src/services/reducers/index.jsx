import { combineReducers } from 'redux'
import { GET_FEED, GET_FEED_SUCCESS, GET_FEED_FAILED } from '../../utils/consts'

const initialState = {
  feedRequest: false,
  feedFailed: false,
  feed: [],
}

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false,
      }
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        feed: action.feed,
        feedRequest: false,
      }
    }
    case GET_FEED_FAILED: {
      return {
        ...state,
        feedFailed: true,
        feedRequest: false,
      }
    }
    default: {
      return state
    }
  }
}

export const rootReducer = combineReducers({ feedReducer })
