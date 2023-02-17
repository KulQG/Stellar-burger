import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import IngredientsDetails from '../../components/IngredientsDetails/IngredientsDetails'
import styles from './IngredientPage.module.css'

export default function IngredientPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <IngredientsDetails />
      </div>
    </div>
  )
}
