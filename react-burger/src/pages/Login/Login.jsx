import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect } from 'react'
import {
  PasswordInput,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import AuthFormWrapper from '../../components/AuthForm/AuthForm'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../services/actions/auth'
import { Navigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = React.useState('')
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const authState = useSelector((s) => s.getUserReducer.getUser)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onClick = (e) => {
    e.preventDefault()
    dispatch(auth([email, password]))
  }

  useEffect(() => {
    if (authState.success) {
      return navigate('/', { replace: true })
    }
  }, [authState])

  if (authState.success) {
    navigate('/', { replace: true })
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
        <Button
          onClick={onClick}
          htmlType="button"
          type="primary"
          size="medium"
        >
          Войти
        </Button>
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

  return !authState.success ? (
    <AuthFormWrapper heading={'Вход'} form={getForm} uiLinks={getUILinks} />
  ) : (
    <Navigate to="/" replace />
  )
}
