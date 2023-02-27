import React from 'react'
import Header from '../../components/Header/Header'
import TotalConstructor from '../../components/TotalConstructor/TotalConstructor'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import IngredientsDetails from '../../components/IngredientsDetails/IngredientsDetails'
import Modal from '../../components/Modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch()
  const isPopup = useSelector(s => s.setPopup.popupState)
  const checkingPopup = useSelector(s => s.checkPopup)

  const navigate = useNavigate()

  const closePopup = () => {
    dispatch({type: 'CLOSE_POPUP'})
    navigate('/')
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