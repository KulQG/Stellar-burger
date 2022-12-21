import React from 'react'
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import orderClass from './OrderDetails.module.css'
import done from '../../images/done.svg'

export default function OrderDetails(props) {
  return (
    <div className={orderClass.box}>
      <h2 style={{textAlign: 'self'}} className={`text text_type_digits-large ${orderClass.title}`}>
        034536
      </h2>
      <h3 className={`text text_type_main-medium ${orderClass.subtitle}`}>
        идентификатор заказа
      </h3>
      <div className={orderClass.icon}>
        <img src={done} />
      </div>
      <p className={`text text_type_main-default ${orderClass.notification}`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive ${orderClass.await}`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}
