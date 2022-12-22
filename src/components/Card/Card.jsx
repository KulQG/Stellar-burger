import React from 'react'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cardStyles from './Card.module.css'
import PropTypes from 'prop-types'

export default function Card(props) {
  //const [card, setCard] = React.useState(props)

  const setCounter = () => {
    if (props.post.__v >= 1) {
      return (
        <div className={cardStyles.count}>
          <Counter count={props.post.__v} size="default" extraClass="m-1" />
        </div>
      )
    }
  }

  return (
    <div
      id={props.post._id}
      className={cardStyles.card}
      onClick={() => {
        props.openPopup()
        props.setter(props.post)
        props.def('ingr')
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

Card.propTypes = {
  setter: PropTypes.func.isRequired,
  arr:PropTypes.array.isRequired,
  openPopup:PropTypes.func.isRequired,
  def:PropTypes.func.isRequired,
  post:PropTypes.object.isRequired,
}
