import React from 'react'
import appStyles from './App.module.css'
import Header from '../Header/Header'
import TotalConstructor from '../TotalConstructor/TotalConstructor'
import { address } from '../../utils/consts.js'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import OrderDetails from '../OrderDetails/OrderDetails'
import IngredientsDetails from '../IngredientsDetails/IngredientsDetails'

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
          console.log(res.status)
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
  const [modal, setModal] = React.useState(false)

  const openPopup = () => {
    setModal(true)
  }

  const closePopup = () => {
    setModal(false)
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

  return (
    <>
      <Header />
      <TotalConstructor
        setter={setCard}
        arr={state.cardData}
        openPopup={openPopup}
        def={setPopup}
      />
      <ModalOverlay visual={modal} close={closePopup}>
        {definePopup(popup)}
      </ModalOverlay>
    </>
  )
}

export default App
