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
