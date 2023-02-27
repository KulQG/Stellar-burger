const initialState = {
  page: 'page',
}

export const ingrPageHandler = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_POPUP_INGR_PAGE': {
      return {
        ...state,
        page: 'popup',
      }
    }
    default: {
      return state
    }
  }
}
