import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useState, useRef } from 'react'
import {
  PasswordInput,
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Profile.module.css'
import { Link, NavLink } from 'react-router-dom'
import AuthFormWrapper from '../../components/AuthForm/AuthForm'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'

export default function Profile() {
  const user = useSelector((s) => s.authReducer.auth.user)

  const [email, setEmail] = useState('')
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('')
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const [name, setName] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    setEmail(user.email)
    setName(user.name)
  }, [user])

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.profile}>
        <div className={styles.panel}>
          <div className={styles.navig}>
            <NavLink className={styles.linkWrap}>
              <p className={`text text_type_main-medium ${styles.link} `}>
                Профиль
              </p>
            </NavLink>
            <NavLink className={styles.linkWrap}>
              <p className={`text text_type_main-medium ${styles.link} `}>
                История заказов
              </p>
            </NavLink>
            <NavLink className={styles.linkWrap}>
              <p className={`text text_type_main-medium ${styles.link} `}>
                Выход
              </p>
            </NavLink>
          </div>
          <p className="text text_type_main-default text_color_inactive">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div className={styles.edit}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => setName(e.target.value)}
            value={name}
            name={'name'}
            ref={inputRef}
            errorText={'Ошибка'}
            size={'default'}
          />
          <EmailInput
            value={email}
            name={'email'}
            onChange={onChangeEmail}
            size={'default'}
            placeholder="E-mail"
          />
          <PasswordInput
            onChange={onChangePassword}
            value={password}
            name={'password'}
            placeholder={'Пароль'}
          />
        </div>
      </div>
    </div>
  )
}
