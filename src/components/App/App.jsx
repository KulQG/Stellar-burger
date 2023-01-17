import React from 'react'
import appStyles from './App.module.css'
import Header from '../Header/Header'
import TotalConstructor from '../TotalConstructor/TotalConstructor'
import { address } from '../../utils/consts.js'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import OrderDetails from '../OrderDetails/OrderDetails'
import IngredientsDetails from '../IngredientsDetails/IngredientsDetails'
import Modal from '../Modal/Modal'
import { CardsContext, CheckPopupContext, PopupContext, SetterContext } from '../contexts'

function App() {
  //состояние для загрузки карточек
  const [state, setState] = React.useState({
    isLoading: true,
    cardData: [],
  })

  //запрос карточек с сервера
  React.useEffect(() => {
    const getData = async () => {
      try {
        setState({ ...state, loading: true })
        const res = await fetch(address)
        if (res.ok) {
          let data
          data = await res.json()
          setState({ cardData: data.data, isLoading: false })
        } else {
          Promise.reject(`Ошибка ${res.status}`)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  //состояние для передачи в попап данных
  const [card, setCard] = React.useState({})

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
      return <OrderDetails />
    }
  }

  const opening = () => {
    if (isOpen) {
      return <Modal close={closePopup}>{definePopup(popup)}</Modal>
    }
  }

  return (
    <CardsContext.Provider value={state.cardData}>
      <SetterContext.Provider value={setCard}>
        <PopupContext.Provider value={openPopup}>
          <CheckPopupContext.Provider value={setPopup}>
            <Header />
            <TotalConstructor/>
            {opening()}
          </CheckPopupContext.Provider>
        </PopupContext.Provider>
      </SetterContext.Provider>
    </CardsContext.Provider>
  )
}

export default App
