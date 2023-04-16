import { AUTH, AUTH_FAILED, AUTH_SUCCESS } from '../../utils/constantsActions'
import {
    authAddress,
    setCookie,
} from '../../utils/consts'
import { AppThunk } from '../types'
import { getUser } from './getUser'

export const auth: AppThunk = ([email, password]: [string, string]) => {
    return function (dispatch) {
        dispatch({ type: AUTH })
        fetch(authAddress, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    dispatch({
                        type: AUTH_FAILED,
                    })
                    console.log('ошибка при получении данных' + res.status)
                }
            })
            .then((data) => {
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: data,
                })
                let authToken = data.accessToken
                setCookie('token', authToken, {path:'/'})
                const refreshToken = data.refreshToken
                localStorage.setItem('refreshToken', refreshToken)
                dispatch(getUser())
            })
            .catch((err) => {
                dispatch({
                    type: AUTH_FAILED,
                })
                console.log('ошибка' + err)
            })
    }
}