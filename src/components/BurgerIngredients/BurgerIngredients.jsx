import React from 'react'
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../Card/Card'
import BIngrStyles from './BurgerIngredients.module.css'
import ingrsData from '../../utils/data.js'

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one')
  const [cards, setCards] = React.useState(ingrsData)

  const tab = () => {
    return (
      <div className={BIngrStyles.tabs}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    )
  }

  return (
    <div className={BIngrStyles.catalog}>
      <h1 className="text text_type_main-large">Соберите Бургер</h1>
      {tab()}
      <div className={BIngrStyles.products}>
        <div className={BIngrStyles.cards}>
        {cards.map(cards => 
            <Card post={cards} />
          ) }
        </div>
      </div>
    </div>
  )
}

BurgerIngredients.propTypes = {
  cards: PropTypes.array
}
