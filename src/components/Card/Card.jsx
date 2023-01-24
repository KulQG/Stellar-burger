import React, { useContext } from 'react'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cardStyles from './Card.module.css'
import PropTypes from 'prop-types'
import { CheckPopupContext, PopupContext, SetterContext } from '../contexts'

export default function Card(props) {
  const setter = useContext(SetterContext)
  const openPopup = useContext(PopupContext)
  const def = useContext(CheckPopupContext)

  const setCounter = () => {
      return (
        <div className={cardStyles.count}>
          <Counter count={1} size="default" extraClass="m-1" />
        </div>
      )
  }

  return (
    <div
      id={props.post._id}
      className={cardStyles.card}
      onClick={() => {
        openPopup()
        setter(props.post)
        def('ingr')
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
}
