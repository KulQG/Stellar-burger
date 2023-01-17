import React from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import ConstructorStyles from './totalConstructor.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import PropTypes from 'prop-types'

export default function TotalConstructor() {
  return (
    <main className={ConstructorStyles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  )
}
