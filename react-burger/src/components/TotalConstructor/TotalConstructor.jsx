import React from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import ConstructorStyles from './totalConstructor.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import PropTypes from 'prop-types'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function TotalConstructor() {
  return (
    <main className={ConstructorStyles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  )
}
