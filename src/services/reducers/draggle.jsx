const initialState = {
  ingredients: [],
  buns: [],
}

export const drag = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILL': {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      }
    }
    case 'DELETE_FILL': {
      function f (item, action) {
        if (item !== action) {
            return item
        }
      }
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => item.id !== action.payload)
      }
    }
    default: {
      return state
    }
  }
}
