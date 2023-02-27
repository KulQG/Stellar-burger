const currentCardState = {
    post: null,
  }
  
export const currentCard = (state = currentCardState, action) => {
    switch (action.type) {
      case 'GET_CURRENT_CARD': {
        return {
          post: action.payload,
        }
      }
      case 'REMOVE_CURRENT_CARD': {
        return {
          post: null,
        }
      }
      default: {
        return state
      }
    }
  }