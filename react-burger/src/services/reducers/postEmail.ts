import {
  POST_EMAIL,
  POST_EMAIL_SUCCESS,
  POST_EMAIL_FAILED,
} from "../../utils/constantsActions";
import { IInitialStateEmail } from "../types/data";

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
    postEmail: string | null;
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
