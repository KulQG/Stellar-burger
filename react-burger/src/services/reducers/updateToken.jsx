const initialState = {
    updateTokenRequest: false,
    updateTokenFailed: false,
    updateToken: {
      success: false,
    },
  }
  
  export const updateTokenReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TOKEN': {
        return {
          ...state,
          updateTokenRequest: true,
          updateTokenFailed: false,
        }
      }
      case 'UPDATE_TOKEN_SUCCESS': {
        return {
          ...state,
          updateTokenFailed: false,
          updateToken: action.payload,
          updateTokenRequest: false,
        }
      }
      case 'UPDATE_TOKEN_FAILED': {
        return {
          ...state,
          updateTokenFailed: true,
          updateTokenRequest: false,
        }
      }
      default: {
        return state
      }
    }
  }