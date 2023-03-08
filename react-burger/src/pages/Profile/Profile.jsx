import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useState, useRef } from 'react'
import {
  PasswordInput,
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Profile.module.css'
import { NavLink } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { patchUser } from '../../services/actions/patchUser'
import { logout } from '../../services/actions/logout'

export default function Profile() {
  const user = useSelector((s) => s.getUserReducer.getUser.user)
  
  //если юзер меняет данные формы - изменяется состояние
  //и кнопки появляются
  const [change, setChange] = useState(false)

  const [email, setEmail] = useState('')
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    setChange(true)
  }

  const [password, setPassword] = useState('')
  const onChangePassword = (e) => {
    setPassword(e.target.value)
    setChange(true)
  }
  const [name, setName] = useState('')
  const inputRef = useRef(null)

  const getPrevData = () => {
    setEmail(user.email)
    setName(user.name)
  }

  const dispatch = useDispatch()

  const patchUserHandler = (e) => {
    e.preventDefault()
    dispatch(patchUser([email, name, password]))
  }

  useEffect(() => {
    getPrevData()
  }, [user])

  const textLink = {
    textDecoration: 'none',
  }
  const activeText = {
    color: 'white',
    textDecoration: 'none',
  }

  const getSubmitBox = () => {
    if (change) {
      return (
        <div className={styles.submitBox}>
          <Button
            onClick={getPrevData}
            htmlType="button"
            type="secondary"
            size="medium"
          >
            Отмена
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
          >
            Сохранить
          </Button>
        </div>
      )
    }
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.profile}>
        <div className={styles.panel}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={styles.link}>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? `text text_type_main-medium`
                    : `text text_type_main-medium text_color_inactive`
                }
                style={({ isActive }) => (isActive ? activeText : textLink)}
              >
                Профиль
              </NavLink>
            </div>
            <div className={styles.link}>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive
                    ? `text text_type_main-medium`
                    : `text text_type_main-medium text_color_inactive`
                }
                style={({ isActive }) => (isActive ? activeText : textLink)}
              >
                История заказов
              </NavLink>
            </div>
            <div className={styles.link}>
              <p
                onClick={() => dispatch(logout())}
                className={`text text_type_main-medium text_color_inactive ${styles.logout}`}
              >
                Выход
              </p>
            </div>
          </div>
          <p className="text text_type_main-default text_color_inactive">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <form onSubmit={patchUserHandler} className={styles.edit}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => {
              setName(e.target.value)
              setChange(true)
            }}
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
          {getSubmitBox()}
        </form>
      </div>
    </div>
  )
}
