import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import {
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Forgot-password.module.css'
import { Link } from 'react-router-dom'
import AuthFormWrapper from '../../components/AuthForm/AuthForm'

export default function ForgotPassword() {
  const [email, setEmail] = React.useState('')
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const getForm = () => {
    return (
      <>
        <EmailInput
          value={email}
          name={'email'}
          onChange={onChangeEmail}
          size={'default'}
          placeholder="Укажите e-mail"
        />
        <Link>
          <Button htmlType="button" type="primary" size="medium">
            Восстановить
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