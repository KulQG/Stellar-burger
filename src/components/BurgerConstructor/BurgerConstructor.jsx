import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import blueBun from '../../images/blue-bun.png'
import BrgConstructorStyles from './BrgConstructorStyles.module.css'

export default function BurgerConsrtuctor(props) {
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
        <div className={BrgConstructorStyles.filling}>
          <div className={BrgConstructorStyles.fillingElement} >
            <DragIcon type="secondary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={blueBun}
            />
          </div>
          <div className={BrgConstructorStyles.fillingElement} >
            <DragIcon type="secondary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={blueBun}
            />
          </div>
          <div className={BrgConstructorStyles.fillingElement} >
            <DragIcon type="secondary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={blueBun}
            />
          </div>
          <div className={BrgConstructorStyles.fillingElement} >
            <DragIcon type="secondary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={blueBun}
            />
          </div>
          <div className={BrgConstructorStyles.fillingElement} >
            <DragIcon type="secondary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={blueBun}
            />
          </div>
          <div className={BrgConstructorStyles.fillingElement} >
            <DragIcon type="secondary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={blueBun}
            />
          </div>
        </div>
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
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
