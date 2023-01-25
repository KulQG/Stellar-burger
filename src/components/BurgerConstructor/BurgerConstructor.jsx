import React, { useState, useContext, useReducer, useEffect } from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import blueBun from '../../images/blue-bun.png'
import BrgConstructorStyles from './BrgConstructorStyles.module.css'
import { CardsContext, CheckPopupContext, PopupContext, SetterContext } from '../contexts'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../services/actions'

export default function BurgerConstructor() {
  const arr = useSelector(store => store.feedReducer.feed)
  const openPopup = useContext(PopupContext)
  const def = useContext(CheckPopupContext)

  //функция нужна для возврата карточек из массива
  const fill = (arr) => {
    //удаление булок из массива
    const filling = arr.filter((card) => card.type !== 'bun')
    dispatcher({type: 'GET_FILLING', payload: filling})

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

  const mainConstructor = () => {

  }

  //подсчет итоговой стоимости бургера

  //Я использую useEffect, так как state полгружался раньше, чем данные
  //из сервера и не менялся. Поэтому я сделал так, чтобы сначала
  //загружался массив, а уже потом генерировалась общая цена
  useEffect(() => {
    if (arr) {
      dispatch({ type: 'data', payload: counter(arr) })
    }
  }, [arr])

  //функция счетчик, складывающий все price
  const counter = (arr) => {
    const prices = arr.map((card) => card.price)
    const reduc = prices.reduce((acc, current) => acc + current, 0)
    return reduc
  }

  //Когда приходят данные я меняю price со значением counter(arr)
  function reducer(state, action) {
    switch (action.type) {
      case 'data':
        return { price: action.payload }
      case 'increment':
        return { price: state.price + action.payload }
      case 'decrement':
        return { price: state.price - action.payload }
      default:
        return { price: state.price }
    }
  }

  const [state, dispatch] = useReducer(reducer, { price: 0 })

  const incrementClick = (value) => {
    dispatch({ type: 'increment', payload: value })
  }

  const decrementClick = (value) => {
    dispatch({ type: 'decrement', payload: value })
  }

  //отправка и получение api///////////////////////////////
  //когда будет нажата кнопка активируется useEffect
  const [click, setClick] = useState(false)

  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(getOrder(arr))
  }, [click])

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
        <div className={BrgConstructorStyles.filling}>{fill(arr)}</div>
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
          <p className="text text_type_digits-medium">{state.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            def('order')
            openPopup()
            setClick(!click)
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
