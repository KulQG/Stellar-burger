import React from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import ConstructorStyles from './totalConstructor.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import PropTypes from 'prop-types'

export default function TotalConstructor(props) {
  //заготовка на открытие всего конструктора
  //const [isActive, setIsActive] = React.useState(true);

  return (
    <main className={ConstructorStyles.main}>
      <BurgerIngredients arr={props.arr} />
      <BurgerConstructor arr={props.arr} />
    </main>
  )
}

TotalConstructor.propTypes = {
  arr: PropTypes.array.isRequired
}
