import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './Header.module.css'
import NavigationComponent from '../NavigationComponent/NavigationComponent'

export default function Header() {
  return (
    <header className={headerStyles.content}>
      <div className={headerStyles.leftPanels}>
        <NavigationComponent text="Конструктор" icon="burger" />
        <NavigationComponent text="Лента заказов" icon="list" />
      </div>
      <Logo />
      <div className={headerStyles.rightPanel}>
        <NavigationComponent text="Личный кабинет" icon="profile" />
      </div>
    </header>
  )
}
