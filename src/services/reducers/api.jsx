import {
  GET_FEED,
  GET_FEED_SUCCESS,
  GET_FEED_FAILED,
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
} from '../../utils/consts'

const initialStateFeed = {
  feedRequest: false,
  feedFailed: false,
  feed: [],
}

export const feedReducer = (state = initialStateFeed, action) => {
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

const initialStateOrder = {
  orderRequest: false,
  orderFailed: false,
  order: null,
}

export const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case GET_ORDER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        orderFailed: false,
        order: action.order,
        orderRequest: false,
      }
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
        order: 'ошибка получения данных'
      }
    }
    default: {
      return state
    }
  }
}
