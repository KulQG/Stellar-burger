import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import IngredientsDetails from '../../components/IngredientsDetails/IngredientsDetails'
import Modal from '../../components/Modal/Modal'
import Home from '../Home/Home'
import styles from './IngredientPage.module.css'

export default function IngredientPage() {
  const page = useSelector((s) => s.ingrPageHandler.page)
  const location = useLocation()
  const feed = useSelector(s => s.feedReducer.feed)

  const getCard = () => {
    const path = location.pathname
    const id = path.split('/ingredients/')[1]
    const card = feed.find(obj => obj._id === id)
    return card
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'GET_CURRENT_CARD', payload: getCard()})
  },[page,location,feed])

  console.log(getCard())

  const handler = () => {
    if (page === 'page') {
      return (
        <div className={styles.wrapper}>
          <Header />
          <div className={styles.content}>
            <IngredientsDetails />
          </div>
        </div>
      )
    } else {
      return <Home />
    }
  }

  return <>{handler()}</>
}
