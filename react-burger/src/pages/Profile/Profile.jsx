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
import { useDispatch, useSelector } from 'react-redux'
import { patchUser } from '../../services/actions/patchUser'

export default function Profile() {
  const user = useSelector((s) => s.getUserReducer.getUser.user)

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

  const getPrevData = () => {
    setEmail(user.email)
    setName(user.name)
  }

  const dispatch = useDispatch()
  const patchUserHandler = () => {
    dispatch(patchUser([email, name, password]))
  }

  useEffect(() => {
    getPrevData()
  }, [user])

  const textLink = {
    textDecoration: 'none',
    //color: '#4C4CFF',
  }
  const activeText = {
    color: 'white',
    textDecoration: 'none',
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.profile}>
        <div className={styles.panel}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div>
              <NavLink to='/profile'
                className={({ isActive }) =>
                  isActive
                    ? `text text_type_main-medium`
                    : `text text_type_main-medium text_color_inactive`
                }
                style={({isActive}) => isActive ? activeText : textLink}
              >
                Профиль
              </NavLink>
            </div>
            <div>
              <NavLink to='orders'
                className={({ isActive }) =>
                  isActive
                    ? `text text_type_main-medium`
                    : `text text_type_main-medium text_color_inactive`
                }
                style={({isActive}) => isActive ? activeText : textLink}
              >
                История заказов
              </NavLink>
            </div>
            <div>
              <NavLink to={'logout'}
                className={({ isActive }) =>
                  isActive
                    ? `text text_type_main-medium`
                    : `text text_type_main-medium text_color_inactive`
                }
                style={({isActive}) => isActive ? activeText : textLink}
              >
                Выход
              </NavLink>
            </div>
          </div>
          <p className="text text_type_main-default text_color_inactive">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <form className={styles.edit}>
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
              onClick={patchUserHandler}
              htmlType="button"
              type="primary"
              size="medium"
            >
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
