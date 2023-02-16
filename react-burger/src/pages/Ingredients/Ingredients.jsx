import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import IngredientsDetails from '../../components/IngredientsDetails/IngredientsDetails'
import styles from './Ingredients.module.css'

export default function Ingredients() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <Outlet />
    </div>
  )
}
