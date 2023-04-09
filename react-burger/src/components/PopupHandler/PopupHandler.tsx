import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientsDetails from "../IngredientsDetails/IngredientsDetails";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { OrderInfoComponent } from "../OrderInfoComponent/OrderInfoComponent";
import { useDispatch, useSelector } from "../../services/hooks";
import { CLOSE_POPUP } from "../../utils/constantsActions";
import { FC } from "react";

interface IPopupHandlerProps {
  path: string;
}

export const PopupHandler: FC<IPopupHandlerProps> = (props) => {
  const dispatch = useDispatch();
  const isPopup = useSelector((s) => s.setPopup.popupState);
  const checkingPopup = useSelector((s) => s.checkPopup);

  const navigate = useNavigate();

  const closePopup = () => {
    dispatch({ type: CLOSE_POPUP });
    navigate(props.path);
  };

  const definePopup = () => {
    if (checkingPopup.ingr) {
      return <IngredientsDetails />;
    } else if (checkingPopup.order) {
      return <OrderDetails />;
    } else if (checkingPopup.orderInfo) {
      return <OrderInfoComponent />;
    }
  };

  if (isPopup) {
    return <Modal close={closePopup}>{definePopup()}</Modal>;
  } else {
    return null;
  }
};
