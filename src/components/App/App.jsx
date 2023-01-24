import React from 'react'
import appStyles from './App.module.css'
import Header from '../Header/Header'
import TotalConstructor from '../TotalConstructor/TotalConstructor'
import { address } from '../../utils/consts.js'
import OrderDetails from '../OrderDetails/OrderDetails'
import IngredientsDetails from '../IngredientsDetails/IngredientsDetails'
import Modal from '../Modal/Modal'
import { useSelector, useDispatch } from 'react-redux';
import { getFeed } from '../../services/actions';
import {
  CardsContext,
  CheckPopupContext,
  PopupContext,
  SetterContext,
} from '../contexts'


function App() {
  const dispatch = useDispatch()
  //запрос карточек с сервера
  React.useEffect(()=> {
    dispatch(getFeed())
  }, [])

  //состояние для передачи в попап данных
  const [card, setCard] = React.useState({})
  const [orderData, setOrderData] = React.useState('')

  //состояние открытого и закрытого попапа
  const [isOpen, setIsOpen] = React.useState(false)

  const openPopup = () => {
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  //определение какой именно попап открыть
  const [popup, setPopup] = React.useState('')

  const definePopup = (p) => {
    if (p === 'ingr') {
      return <IngredientsDetails card={card} />
    } else if (p === 'order') {
      return <OrderDetails order={orderData} />
    }
  }

  const opening = () => {
    if (isOpen) {
      return <Modal close={closePopup}>{definePopup(popup)}</Modal>
    }
  }

  return (
      <SetterContext.Provider value={{ setCard, setOrderData }}>
        <PopupContext.Provider value={openPopup}>
          <CheckPopupContext.Provider value={setPopup}>
            <Header />
            <TotalConstructor />
            {opening()}
          </CheckPopupContext.Provider>
        </PopupContext.Provider>
      </SetterContext.Provider>
  )
}

export default App
