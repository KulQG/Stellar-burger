import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useState, FC } from 'react'
import {
  PasswordInput,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Login.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthFormWrapper from '../../components/AuthForm/AuthForm'
import { useSelector } from 'react-redux'
import { auth } from '../../services/actions/auth'
import { Navigate } from 'react-router-dom'
import { useDispatch } from '../../services/hooks'

export const Login: FC = () => {
  const [change, setChange] = useState({
    email: false,
    password: false,
  })

  const [email, setEmail] = React.useState('')
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    setChange({
      ...change,
      email: true,
    })
  }

  const [password, setPassword] = React.useState('')
  const onChangePassword = (e) => {
    setPassword(e.target.value)
    setChange({
      ...change,
      password: true,
    })
  }

  const authState = useSelector((s) => s.getUserReducer.getUser)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClick = (e) => {
    e.preventDefault()
    dispatch(auth([email, password]))
  }

  const location = useLocation()
  const locationBefore = location.search.split('?path=')[1]

  useEffect(() => {
    if (authState.success) {
      if (location.search) {
        navigate(locationBefore, { replace: true })
      } else {
        navigate('/', { replace: true })
      }
    }
  }, [authState])

  const getButton = () => {
    if (change.email && change.password) {
      return (
        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      )
    }
  }

  const getForm = () => {
    return (
      <>
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
        {getButton()}
      </>
    )
  }

  const getUILinks = () => {
    return (
      <>
        <div className={styles.link}>
          <p className="text text_type_main-default">
            Вы — новый пользователь?
          </p>
          <Link className={styles.text} to="/register">
            <p
              className={`${styles.text} ${styles.textLink} text text_type_main-default`}
            >
              Зарегистрироваться
            </p>
          </Link>
        </div>
        <div className={styles.link}>
          <p className="text text_type_main-default"> Забыли пароль?</p>
          <Link className={styles.text} to="/forgot-password">
            <p
              className={`${styles.text} ${styles.textLink} text text_type_main-default`}
            >
              Восстановить пароль
            </p>
          </Link>
        </div>
      </>
    )
  }

  if (!authState.success) {
    return (
      <AuthFormWrapper
        submit={onClick}
        heading={'Вход'}
        form={getForm}
        uiLinks={getUILinks}
      />
    )
  } else {
    return <Navigate to={locationBefore || '/'} replace />
  }
}
