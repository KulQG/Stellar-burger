const initialState = {
  postPasswordRequest: false,
  postPasswordFailed: false,
  postPassword: {
    success: false
  },
}

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_PASSWORD': {
      return {
        ...state,
        postPasswordRequest: true,
        postPasswordFailed: false,
      }
    }
    case 'POST_PASSWORD_SUCCESS': {
      return {
        ...state,
        postPasswordFailed: false,
        postPassword: action.postPassword,
        postPasswordRequest: false,
      }
    }
    case 'POST_PASSWORD_FAILED': {
      return {
        ...state,
        postPasswordFailed: true,
        postPasswordRequest: false,
      }
    }
    default: {
      return state
    }
  }
}
