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
      <BurgerIngredients setter={props.setter} arr={props.arr} openPopup={props.openPopup} def={props.def} />
      <BurgerConstructor arr={props.arr} openPopup={props.openPopup} def={props.def}/>
    </main>
  )
}

TotalConstructor.propTypes = {
  arr: PropTypes.array.isRequired,
  setter: PropTypes.func.isRequired,
  openPopup: PropTypes.func.isRequired,
  def: PropTypes.func.isRequired
}
