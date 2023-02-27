import React from 'react'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cardStyles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useDrag } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const constructor = useSelector((s) => s.getConstructor.fill)

  const count = constructor.filter((item) => item._id === props.post._id)

  const setCounter = () => {
    if (count.length > 0) {
      return (
        <div className={cardStyles.count}>
          <Counter count={count.length} size="default" extraClass="m-1" />
        </div>
      )
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
    item: { ...props.post, id: uuidv4() },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  })

  return (
    !isDrag && (
      <>
        <Link className={cardStyles.link} to={`/ingredients/${props.post._id}`}>
          <div
            ref={dragRef}
            id={props.post._id}
            className={cardStyles.card}
            onClick={() => {
              dispatch({ type: 'SET_INGR_POPUP' }) //определитель модального окна
              dispatch({ type: 'OPEN_POPUP' }) //открытие модального окна
              dispatch({ type: 'GET_CURRENT_CARD', payload: props.post }) //передача данных
              dispatch({ type: 'OPEN_POPUP_INGR_PAGE' })
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
    )
  )
}
