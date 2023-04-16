import { useState, useReducer, useEffect, FC } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import BrgConstructorStyles from "./BrgConstructorStyles.module.css";
import { getOrder } from "../../services/actions/getOrder";
import { useDrop } from "react-dnd";
import uuid from "react-uuid";
import {FillItem} from "../FillItem/FillItem";
import { useNavigate } from "react-router-dom";
import { DELETE_FILL, GET_FILLING, OPEN_POPUP, SET_ORDER_POPUP, UPDATE_BUN, UPDATE_FILL } from "../../utils/constantsActions";
import { useDispatch, useSelector } from "../../services/hooks";
import { TDraggedCard } from "../../services/types/data";

export const BurgerConstructor: FC = () => {
  const arr = useSelector((store) => store.drag.ingredients);
  const bun = useSelector((store) => store.drag.buns);
  const [priceBun, setPriceBun] = useState<number>(bun.price);

  //функция нужна для возврата карточек из массива
  const fill = () => {
    //возврат каждой карточки
    const mapMethod = (array: TDraggedCard[]) => {
      return array.map((card, index) => {
        const id = uuid();

        return (
          <FillItem
            arr={arr}
            key={id}
            card={card}
            index={index}
            plus={decrementClick}
          />
        );
      });
    };

    return <>{mapMethod(arr)}</>;
  };

  //вставляет булку
  const baker = (indicator: number) => {
    if (indicator === 1) {
      return (
        <div ref={dropBun}>
          <ConstructorElement
            type={"top"}
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      );
    } else if (indicator === 2) {
      return (
        <ConstructorElement
          type={"bottom"}
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      );
    }
  };

  //подсчет итоговой стоимости бургера

  //Я использую useEffect, так как state полгружался раньше, чем данные
  //из сервера и не менялся. Поэтому я сделал так, чтобы сначала
  //загружался массив, а уже потом генерировалась общая цена
  useEffect(() => {
    if (arr) {
      const counter = () => {
        const prices = arr.map((card: TDraggedCard) => card.price);
        const reduc = prices.reduce(
          (acc: number, current: number) => acc + current, priceBun
        );
        return reduc;
      };
      dispatch({ type: "data", payload: counter() });
      const payload: TDraggedCard[] = [...arr, bun]
      //выносит конструктор в стор
      dispatcher({ type: GET_FILLING, payload: payload });
    }
  }, [arr, bun]);

  type TReduceAction =
    | { type: "data"; payload: number }
    | { type: "decrement"; payload: number };

  //Когда приходят данные я меняю price со значением counter(arr)
  function reducer(state: { price: number }, action: TReduceAction) {
    switch (action.type) {
      case "data":
        return { price: action.payload };
      case "decrement":
        return { price: state.price - action.payload };
      default:
        return { price: state.price };
    }
  }

  const [state, dispatch] = useReducer(reducer, { price: 0 });

  const decrementClick = (value: number, data: string) => {
    dispatch({ type: "decrement", payload: value });
    dispatcher({ type: DELETE_FILL, payload: data });
  };

  //отправка и получение api///////////////////////////////

  const dispatcher = useDispatch();

  //принятие карточек из BurgerIngredients
  const [, dropIngr] = useDrop({
    accept: "ingr",
    drop(item: TDraggedCard) {
      dispatcher({
        type: UPDATE_FILL,
        payload: item,
      });
    },
  });

  const [, dropBun] = useDrop({
    accept: "bun",
    drop(item: TDraggedCard) {
      dispatcher({
        type: UPDATE_BUN,
        payload: item,
      });
      setPriceBun(bun.price);
    },
  });

  const user = useSelector((s) => s.getUserReducer.getUser);
  const navigate = useNavigate();
  const direct = () => {
    if (!user.success) {
      navigate("/login");
    } else {
      dispatcher({ type: SET_ORDER_POPUP });
      dispatcher({ type: OPEN_POPUP });
      dispatcher(getOrder([...arr, bun]));
    }
  };

  return (
    <div className={BrgConstructorStyles.total}>
      <div className={BrgConstructorStyles.elements}>
        {baker(1)}
        <div ref={dropIngr} className={BrgConstructorStyles.filling}>
          {fill()}
        </div>
        {baker(2)}
      </div>
      <div className={BrgConstructorStyles.order}>
        <div className={BrgConstructorStyles.price}>
          <p className="text text_type_digits-medium">{state.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            direct();
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
