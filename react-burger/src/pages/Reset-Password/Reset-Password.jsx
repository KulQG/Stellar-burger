import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import {
    PasswordInput,
    Input
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Reset-Password.module.css'
import { Link } from 'react-router-dom'
import AuthFormWrapper from '../../components/AuthForm/AuthForm'

export default function ResetPassword() {
    const [password, setPassword] = React.useState('')
    const onChangePassword = (e) => {
      setPassword(e.target.value)
    }
    const [code, setCode] = React.useState('')
    const inputRef = React.useRef(null)

  const getForm = () => {
    return (
      <>
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={'password'}
          placeholder={'Пароль'}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={(e) => setCode(e.target.value)}
          value={code}
          name={'code'}
          ref={inputRef}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <Link>
          <Button htmlType="button" type="primary" size="medium">
            Сохранить
          </Button>
        </Link>
      </>
    )
  }

  const getUILinks = () => {
    return (
      <div className={styles.link}>
        <p className="text text_type_main-default">Вспомнили пароль?</p>
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

  return (
    <AuthFormWrapper
      heading="Восстановление пароля"
      form={getForm}
      uiLinks={getUILinks}
    />
  )
}