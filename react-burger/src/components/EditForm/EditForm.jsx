import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useState, useRef } from 'react'
import {
    PasswordInput,
    EmailInput,
    Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './EditForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { patchUser } from '../../services/actions/patchUser'

export function EditForm() {
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
    )
}