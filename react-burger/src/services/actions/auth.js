import {
    authAddress,
    setCookie,
} from '../../utils/consts'
import { getUser } from './getUser'
import { Dispatch } from 'redux'
import { store } from '../store/store'
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

//export type RootState = ReturnType<typeof store.getState>;

//export type AppThunk<TReturn = void> = ActionCreator<
//  ThunkAction<TReturn, Action, RootState, TApplicationActions>
//>; 

export function auth([email, password]/*: [string, string]*/) {
    return function (dispatch/*:Dispatch*/) {
        dispatch({ type: 'AUTH' })
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
                        type: 'AUTH_FAILED',
                    })
                    console.log('ошибка при получении данных' + res.status)
                }
            })
            .then((data) => {
                dispatch({
                    type: 'AUTH_SUCCESS',
                    payload: data,
                })
                let authToken = data.accessToken
                setCookie('token', authToken, '/')
                const refreshToken = data.refreshToken
                localStorage.setItem('refreshToken', refreshToken)
                dispatch(getUser())
            })
            .catch((err) => {
                dispatch({
                    type: 'AUTH_FAILED',
                })
                console.log('ошибка' + err)
            })
    }
}