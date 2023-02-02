const initialState = {
  ingredients: [],
  buns: {
    _id: '60d3b41abdacab0026a733c6',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    __v: 0,
  },
}

export const drag = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILL': {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      }
    }
    case 'UPDATE_BUN': {
      return {
        ...state,
        buns: action.payload,
      }
    }
    case 'DELETE_FILL': {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.id !== action.payload,
        ),
      }
    }
    case 'SORTING': {
      return {
        ...state,
        ingredients: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
