import React, { FC } from 'react'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cardStyles from './Card.module.css'
import { useDrag } from 'react-dnd'
import uuid from "react-uuid";
import { Link } from 'react-router-dom'
import { TCard } from '../../services/types/data'
import { useDispatch, useSelector } from '../../services/hooks';
import { GET_CURRENT_CARD, OPEN_POPUP, OPEN_POPUP_INGR_PAGE, SET_INGR_POPUP } from '../../utils/constantsActions';

interface ICardProps {
  post: TCard;
}

export const Card: FC<ICardProps> = (props) => {
  const constructor = useSelector((s) => s.getConstructor.fill)

  const count = constructor.filter((item: TCard) => item._id === props.post._id)

  const setCounter = () => {
    if (count.length > 0) {
      return (
        <div className={cardStyles.count}>
          <Counter count={count.length} size="default" extraClass="m-1" />
        </div>
      )
    } else {
      return null
    }
  }

  const dispatch = useDispatch()

  const typing = () => {
    if (props.post.type === 'bun') {
      return 'bun'
    } else {
      return 'ingr'
    }
  }
  const [{ isDrag }, dragRef] = useDrag({
    type: typing(),
    item: { ...props.post, id: uuid() },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  })

  return (
    !isDrag ? (
      <>
        <Link className={cardStyles.link} to={`/ingredients/${props.post._id}`}>
          <div
            ref={dragRef}
            id={props.post._id}
            className={cardStyles.card}
            onClick={() => {
              dispatch({ type: SET_INGR_POPUP }) //определитель модального окна
              dispatch({ type: OPEN_POPUP }) //открытие модального окна
              dispatch({ type: GET_CURRENT_CARD, payload: props.post }) //передача данных
              dispatch({ type: OPEN_POPUP_INGR_PAGE })
            }}
          >
            {setCounter()}
            <img
              className={cardStyles.image}
              src={props.post.image}
              alt={props.post.name}
            />
            <div className={cardStyles.price}>
              <p className="text text_type_digits-default">
                {props.post.price}
              </p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{props.post.name}</p>
          </div>
        </Link>
      </>
    ) : null
  )
}
