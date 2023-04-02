export interface IAction {
  type: string;
  payload?: any;
}

export type TDraggedCardState = {
  ingredients: any[];
  buns: {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
  };
};

export type TCard = {
  _id: string;
  name: string;
  type: "bun" | 'sauce' | 'main';
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TArrayCards = TCard[]

export interface IGetUserInitial {
  getUserRequest: boolean;
  getUserFailed: boolean;
  getUser: {
    success: boolean;
  };
}

export interface IInitialStateFeed {
  feedRequest: boolean;
  feedFailed: boolean;
  feed: any[];
}

export interface IStateForAuth {
  authRequest: boolean;
  authFailed: boolean;
  auth: { success: boolean } | string;
}

export interface IPageHandler {
  page: "page" | "popup";
}

export interface IInitialStateOrder {
  orderRequest: boolean;
  orderFailed: boolean;
  order: null | number | string;
}

export interface IInitialStateStringBool {
  [name: string]: boolean
}

export interface IInitialStateEmail {
  postEmailRequest: boolean;
  postEmailFailed: boolean;
  postEmail: {
    success: boolean;
  };
}

export interface IInitialStateEmailForRegister {
  registerRequest: boolean;
  registerFailed: boolean;
  register: {
    success: boolean;
  };
}

export interface IWsState {
  wsConnected: boolean;
  orders: {
    success: boolean;
    orders: any[];
  };
  error: undefined | string;
}

export interface IWsAction {
  type: string;
  payload: string | any[];
}