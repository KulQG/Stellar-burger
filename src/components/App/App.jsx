import React from 'react'
import appStyles from './App.module.css'
import Header from '../Header/Header'
import TotalConstructor from '../TotalConstructor/TotalConstructor'
import { address } from '../../utils/consts.js'
import OrderDetails from '../OrderDetails/OrderDetails'
import IngredientsDetails from '../IngredientsDetails/IngredientsDetails'
import Modal from '../Modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { getFeed } from '../../services/actions'


function App() {
  const dispatch = useDispatch()
  //запрос карточек с сервера
  React.useEffect(() => {
    dispatch(getFeed())
  }, [])

  const isPopup = useSelector(s => s.setPopup.popupState)
  const checkingPopup = useSelector(s => s.checkPopup)

  const closePopup = () => {
    dispatch({type: 'CLOSE_POPUP'})
  }

  const definePopup = () => {
    if (checkingPopup.ingr) {
      return <IngredientsDetails />
    } else if (checkingPopup.order) {
      return <OrderDetails />
    }
  }

  const opening = () => {
    if (isPopup) {
      return <Modal close={closePopup}>{definePopup()}</Modal>
    }
  }

  return (
    <>
      <Header />
      <TotalConstructor />
      {opening()}
    </>
  )
}

export default App
