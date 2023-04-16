import {
  GET_FEED,
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
} from "../../../utils/constantsActions";
import { TArrayCards } from "../../types/data";

export interface IGetFeedAction {
  readonly type: typeof GET_FEED;
}

export interface IGetFeedSuccessAction {
  readonly type: typeof GET_FEED_SUCCESS;
  readonly feed: TArrayCards;
}

export interface IGetFeedFailedAction {
  readonly type: typeof GET_FEED_FAILED;
}

export type TGetFeedActions =
  | IGetFeedAction
  | IGetFeedSuccessAction
  | IGetFeedFailedAction;
