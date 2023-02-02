const constructor = {
  fill: [],
}

export const getConstructor = (state = constructor, action) => {
  switch (action.type) {
    case 'GET_FILLING': {
      return {
        fill: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
