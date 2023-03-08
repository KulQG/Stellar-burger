import React, { useEffect, useState } from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './Header.module.css'
import NavigationComponent from '../NavigationComponent/NavigationComponent'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const navigToHome = () => {
    navigate('/')
  }

  const navigToList = () => {
    navigate('/list')
  }

  const navigToProfile = () => {
    navigate('/profile')
  }

  const logoClick = () => {
    navigate('/')
  }

  return (
    <header className={headerStyles.content}>
      <div className={headerStyles.leftPanels}>
        <NavigationComponent
          click={navigToHome}
          text="Конструктор"
          icon="burger"
        />
        <NavigationComponent
          click={navigToList}
          text="Лента заказов"
          icon="list"
        />
      </div>
      <div style={{cursor: 'pointer'}} onClick={logoClick} >
        <Logo className={headerStyles.logo} />
      </div>
      <div className={headerStyles.rightPanel}>
        <NavigationComponent
          click={navigToProfile}
          text="Личный кабинет"
          icon="profile"
        />
      </div>
    </header>
  )
}
