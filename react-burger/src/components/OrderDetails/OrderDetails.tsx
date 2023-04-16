import { FC } from 'react'
import orderClass from './OrderDetails.module.css'
import done from '../../images/done.svg'
import { useSelector } from '../../services/hooks'

export const OrderDetails: FC = () => {
  const order = useSelector(store => store.orderReducer.order)

  return (
    <div className={orderClass.box}>
      <h2 className={`text text_type_digits-large ${orderClass.title}`}>
        {order}
      </h2>
      <h3 className={`text text_type_main-medium`}>
        идентификатор заказа
      </h3>
      <div className={orderClass.icon}>
        <img src={done} />
      </div>
      <p className={`text text_type_main-default ${orderClass.notification}`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}
