import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../Card/Card'
import BIngrStyles from './BurgerIngredients.module.css'
import { CardsContext } from '../contexts'

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one')
  //const [cards, setCards] = React.useState(props.arr)
  const arr = useContext(CardsContext)


  //разделение ингредиентов
  const headersWithCards = () => {
    //создание массивов с каждым типом продукта
    let buns = []
    let main = []
    let sauces = []

    arr.forEach((card) => {
      if (card.type === 'bun') {
        buns.push(card)
      } else if (card.type === 'main') {
        main.push(card)
      } else if (card.type === 'sauce') {
        sauces.push(card)
      }
    })

    //возврат разметки карточки
    //для каждого уникального массива
    const mapMethod = (arr) => {
      return arr.map((card) => {
        return (
          <Card
            post={card}
            key={card._id}
          />
        )
      })
    }

    return (
      <>
        <h2 className="text text_type_main-medium">Булки</h2>
        <div className={BIngrStyles.cards}>{mapMethod(buns)}</div>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <div className={BIngrStyles.cards}>{mapMethod(sauces)}</div>
        <h2 className="text text_type_main-medium">Начинки</h2>
        <div className={BIngrStyles.cards}>{mapMethod(main)}</div>
      </>
    )
  }

  const tab = () => {
    return (
      <nav className={BIngrStyles.tabs}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
    )
  }

  return (
    <div className={BIngrStyles.catalog}>
      <h1 className="text text_type_main-large">Соберите Бургер</h1>
      {tab()}
      <div className={BIngrStyles.products}>
        <div className={BIngrStyles.cards}>{headersWithCards()}</div>
      </div>
    </div>
  )
}
