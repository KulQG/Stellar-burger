import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import {
  PasswordInput,
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Profile.module.css'
import { Link } from 'react-router-dom'
import AuthFormWrapper from '../../components/AuthForm/AuthForm'
import Header from '../../components/Header/Header'

export default function Profile() {
  const [email, setEmail] = React.useState('')
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = React.useState('')
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const [name, setName] = React.useState('')
  const inputRef = React.useRef(null)

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.profile}>
        <div className={styles.panel}>
          <div className={styles.navig}>
            <Link className={styles.linkWrap}>
              <p className={`text text_type_main-medium ${styles.link} `}>
                Профиль
              </p>
            </Link>
            <Link className={styles.linkWrap}>
              <p className={`text text_type_main-medium ${styles.link} `}>
                История заказов
              </p>
            </Link>
            <Link className={styles.linkWrap}>
              <p className={`text text_type_main-medium ${styles.link} `}>
                Выход
              </p>
            </Link>
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
