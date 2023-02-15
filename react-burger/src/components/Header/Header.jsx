import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './Header.module.css'
import NavigationComponent from '../NavigationComponent/NavigationComponent'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={headerStyles.content}>
      <div className={headerStyles.leftPanels}>
        <Link className={headerStyles.link} to={'/'}>
          <NavigationComponent text="Конструктор" icon="burger" />
        </Link>
        <NavigationComponent text="Лента заказов" icon="list" />
      </div>
      <Logo className={headerStyles.logo} />
      <div className={headerStyles.rightPanel}>
        <Link className={headerStyles.link} to={'/profile'}>
          <NavigationComponent text="Личный кабинет" icon="profile" />
        </Link>
      </div>
    </header>
  )
}
