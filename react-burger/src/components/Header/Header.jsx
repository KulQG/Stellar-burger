import React, { useEffect, useState } from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './Header.module.css'
import NavigationComponent from '../NavigationComponent/NavigationComponent'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [isActive, setIsActive] = useState({
    type: 'burger',
  })

  return (
    <header className={headerStyles.content}>
      <div className={headerStyles.leftPanels}>
        <Link className={headerStyles.link} to={'/'}>
          <NavigationComponent
            isActive={isActive.type}
            setActive={setIsActive}
            text="Конструктор"
            icon="burger"
          />
        </Link>
        <NavigationComponent
          isActive={isActive.type}
          setActive={setIsActive}
          text="Лента заказов"
          icon="list"
        />
      </div>
      <Logo className={headerStyles.logo} />
      <div className={headerStyles.rightPanel}>
        <Link className={headerStyles.link} to={'/profile'}>
          <NavigationComponent
            isActive={isActive.type}
            setActive={setIsActive}
            text="Личный кабинет"
            icon="profile"
          />
        </Link>
      </div>
    </header>
  )
}
