import { useEffect } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { OrderComponents } from "../../components/OrderComponents/OrderComponents";
import { PopupHandler } from "../../components/PopupHandler/PopupHandler";
import { Profile } from "../Profile/Profile";
import {
  USER_WS_CONNECTION_CLOSE,
  USER_WS_CONNECTION_START,
} from "../../utils/constantsActions";

export const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: USER_WS_CONNECTION_START,
    });

    return () => {
      dispatch({ type: USER_WS_CONNECTION_CLOSE });
    };
  }, [dispatch]);

  const socket = useSelector((s) => s.userWsReducer.orders);

  return (
    <>
      <Profile>
        <OrderComponents socket={socket} />
      </Profile>
      <PopupHandler path={"/profile/orders"} />
    </>
  );
};
