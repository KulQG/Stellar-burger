import React, { useContext } from 'react'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cardStyles from './Card.module.css'
import PropTypes from 'prop-types'
import { CheckPopupContext, PopupContext, SetterContext } from '../contexts'
import { useDispatch, useSelector } from 'react-redux'
import { useDrag } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid'

export default function Card(props) {
  const setter = useContext(SetterContext)
  const openPopup = useContext(PopupContext)
  const def = useContext(CheckPopupContext)
  const constructor = useSelector((s) => s.drag.ingredients)

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
      <div
        ref={dragRef}
        id={props.post._id}
        className={cardStyles.card}
        onClick={() => {
          openPopup()
          setter(props.post)
          def('ingr')
          dispatch({ type: 'GET_CURRENT_CARD', payload: props.post })
        }}
      >
        {setCounter()}
        <img
          className={cardStyles.image}
          src={props.post.image}
          alt={props.post.name}
        />
        <div className={cardStyles.price}>
          <p className="text text_type_digits-default">{props.post.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{props.post.name}</p>
      </div>
    )
  )
}
