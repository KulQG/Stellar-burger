import {
  POST_EMAIL,
  POST_EMAIL_SUCCESS,
  POST_EMAIL_FAILED,
} from "../actions/constants";

interface IInitialStateEmail {
  postEmailRequest: boolean;
  postEmailFailed: boolean;
  postEmail: {
    success: boolean;
  };
}

const initialStateEmail: IInitialStateEmail = {
  postEmailRequest: false,
  postEmailFailed: false,
  postEmail: {
    success: false,
  },
};

export const postForgotReducer = (
  state = initialStateEmail,
  action: {
    type: string;
    postEmail: any;
  }
) => {
  switch (action.type) {
    case POST_EMAIL: {
      return {
        ...state,
        postEmailRequest: true,
        postEmailFailed: false,
      };
    }
    case POST_EMAIL_SUCCESS: {
      return {
        postEmailFailed: false,
        postEmail: action.postEmail,
        postEmailRequest: false,
      };
    }
    case POST_EMAIL_FAILED: {
      return {
        ...state,
        postEmailFailed: true,
        postEmailRequest: false,
        postEmail: "ошибка получения данных",
      };
    }
    default: {
      return state;
    }
  }
};
