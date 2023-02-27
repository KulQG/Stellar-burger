const initialStateEmail = {
  registerRequest: false,
  registerFailed: false,
  register: {
    success: false,
    
  }
}

export const registerReducer = (state = initialStateEmail, action) => {
  switch (action.type) {
    case 'REGISTER': {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      }
    }
    case 'REGISTER_SUCCESS': {
      return {
        ...state,
        registerFailed: false,
        register: action.payload,
        registerRequest: false,
      }
    }
    case 'REGISTER_FAILED': {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false,
        register: 'ошибка получения данных',
      }
    }
    default: {
      return state
    }
  }
}
