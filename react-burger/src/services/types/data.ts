export interface IAction {
  type: string;
  payload?: any;
}

export type TDraggedCardState = {
  ingredients: TDraggedCard[];
  buns: TDraggedCard;
};

export type TCard = {
  _id: string;
  name: string;
  type: "bun" | "sauce" | "main";
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

export type TDraggedCard = TCard & { id: string };

export type TArrayCards = TCard[];

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
  page: string;
}

export interface IInitialStateOrder {
  orderRequest: boolean;
  orderFailed: boolean;
  order: null | number | string;
}

export interface IInitialStateStringBool {
  [name: string]: boolean;
}

export interface IInitialStateEmail {
  postEmailRequest: boolean;
  postEmailFailed: boolean;
  postEmail:
    | {
        success: boolean;
      }
    | string;
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
    orders: IWsObj[];
  };
  error: any;
}

export interface IWsAction {
  type: string;
  payload: any;
}

export type IWsObj = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type WebSocketEvent = Event & {
  data?: string;
};

export type WebSocketMessage = {
  success: boolean;
  [key: string]: any;
};
