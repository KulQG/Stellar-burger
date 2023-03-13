const initialState = {
  ingr: false,
  order: false,
  orderInfo: false
}

export const checkPopup = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INGR_POPUP': {
      return {
        ...state,
        ingr: true,
        order: false,
        orderInfo: false
      }
    }
    case 'SET_ORDER_POPUP': {
      return {
        ...state,
        ingr: false,
        order: true,
        orderInfo: false
      }
    }
    case 'SET_ORDER_INFO_POPUP': {
      return {
        ...state,
        ingr: false,
        order: false,
        orderInfo: true
      }
    }
    default: {
      return state
    }
  }
}

const setPopupState = {
  popupState: false,
}
export const setPopup = (state = setPopupState, action) => {
  switch (action.type) {
    case 'OPEN_POPUP': {
      return {
        ...state,
        popupState: true,
      }
    }
    case 'CLOSE_POPUP': {
      return {
        ...state,
        popupState: false,
      }
    }
    default: {
      return state
    }
  }
}
