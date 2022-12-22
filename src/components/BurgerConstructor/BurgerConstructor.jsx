import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import blueBun from '../../images/blue-bun.png'
import BrgConstructorStyles from './BrgConstructorStyles.module.css'
import PropTypes from 'prop-types'

export default function BurgerConstructor(props) {
  //функция нужна для возврата карточек из массива
  const fill = (arr) => {
    //удаление булок из массива
    let filling = arr.filter((card) => card.type !== 'bun')

    //возврат каждой карточки
    const mapMethod = (arr) => {
      return arr.map((card) => {
        return (
          <div className={BrgConstructorStyles.fillingElement} key={card._id}>
            <DragIcon type="secondary" />
            <ConstructorElement
              text={card.name}
              price={card.price}
              thumbnail={card.image}
            />
          </div>
        )
      })
    }

    return <>{mapMethod(filling)}</>
  }

  //подсчет итоговой стоимости бургера
  const counter = (arr) => {
    const prices = arr.map((card) => card.price)
    const reduc = prices.reduce((acc, current) => acc + current, 0)
    return reduc
  }

  return (
    <div className={BrgConstructorStyles.total}>
      <div className={BrgConstructorStyles.elements}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={blueBun}
        />
        <div className={BrgConstructorStyles.filling}>{fill(props.arr)}</div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={blueBun}
        />
      </div>
      <div className={BrgConstructorStyles.order}>
        <div className={BrgConstructorStyles.price}>
          <p className="text text_type_digits-medium">{counter(props.arr)}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            props.openPopup()
            props.def('order')
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

BurgerConstructor.propTypes = {
  arr: PropTypes.array.isRequired,
}
