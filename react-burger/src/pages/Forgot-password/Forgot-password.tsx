import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Forgot-password.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {AuthFormWrapper} from '../../components/AuthForm/AuthForm'
import { forgotPassword } from '../../services/actions/forgot-password'
import { useDispatch, useSelector } from '../../services/hooks'
import { RootState } from '../../services/types'

export const ForgotPassword: FC = () => {
  const postEmail = useSelector((s) => s.postForgotReducer.postEmail)

  const [change, setChange] = useState(false)

  const [email, setEmail] = React.useState('')

  const onChangeEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setChange(true);
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const click: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    if (postEmail) {
      navigate("/reset-password");
    }
  };

  useEffect(() => {
    if (email.length > 0 && postEmail) {
      navigate('/reset-password')
    }
  }, [postEmail])

  const getButton = () => {
    if (change) {
      return (
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
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
          placeholder="Укажите e-mail"
        />
        {getButton()}
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

  const user = useSelector((s) => s.getUserReducer.getUser)

  return !user.success ? (
    <AuthFormWrapper
      heading="Восстановление пароля"
      form={getForm}
      uiLinks={getUILinks}
      submit={click}
    />
  ) : (
    <Navigate to="/" replace />
  )
}
