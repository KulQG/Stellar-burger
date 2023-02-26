import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import {
  PasswordInput,
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Register.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthFormWrapper from '../../components/AuthForm/AuthForm'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../services/actions/register'

export default function Register() {
  const [email, setEmail] = React.useState('')
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const user = useSelector((s) => s.getUserReducer.getUser)

  const [password, setPassword] = React.useState('')
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const [name, setName] = React.useState('')
  const inputRef = React.useRef(null)

  const dispatch = useDispatch()
  const answer = useSelector((s) => s.registerReducer.register)

  const navigate = useNavigate()
  const click = (e) => {
    e.preventDefault()
    dispatch(register([email, password, name]))
  }

  React.useEffect(() => {
    if (answer.success) {
      navigate('/login', { replace: true })
    }
  }, [answer])

  const getForm = () => {
    return (
      <>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name={'name'}
          ref={inputRef}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
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
        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </>
    )
  }

  const getUILinks = () => {
    return (
      <div className={styles.link}>
        <p className="text text_type_main-default">Уже зарегистрированы?</p>
        <Link className={styles.text} to="/login">
          <p
            className={`${styles.text} ${styles.textLink} text text_type_main-default`}
          >
            Войти
          </p>
        </Link>
      </div>
    )
  }

  return !user.success ? (
    <AuthFormWrapper
      heading="Регистрация"
      form={getForm}
      uiLinks={getUILinks}
      submit={click}
    />
  ) : (
    <Navigate to="/" replace />
  )
}
