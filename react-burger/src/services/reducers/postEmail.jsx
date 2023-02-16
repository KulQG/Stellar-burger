const initialStateEmail = {
    postEmailRequest: false,
    postEmailFailed: false,
    postEmail: null,
  }
  
  export const postForgotReducer = (state = initialStateEmail, action) => {
    switch (action.type) {
      case 'POST_EMAIL': {
        return {
          ...state,
          postEmailRequest: true,
          postEmailFailed: false,
        }
      }
      case 'POST_EMAIL_SUCCESS': {
        return {
          postEmailFailed: false,
          postEmail: action.postEmail,
          postEmailRequest: false,
        }
      }
      case 'POST_EMAIL_FAILED': {
        return {
          ...state,
          postEmailFailed: true,
          postEmailRequest: false,
          postEmail: 'ошибка получения данных',
        }
      }
      default: {
        return state
      }
    }
  }