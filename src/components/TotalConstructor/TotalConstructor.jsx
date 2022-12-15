import React from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import ConstructorStyles from './totalConstructor.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

export default function TotalConstructor(props) {
  //заготовка на открытие всего конструктора
  const [isActive, setIsActive] = React.useState(true);

  return (
    <div className={ConstructorStyles.constructor}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  )
}
