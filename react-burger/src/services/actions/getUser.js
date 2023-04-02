import {
    getCookie,
    getUserAddress,
} from '../../utils/consts'
import { updateToken } from './updateToken'
import { Dispatch } from 'redux'

export function getUser() {
    return function (dispatch/*: Dispatch*/) {
        dispatch({
            type: 'GET_USER',
        })
        fetch(getUserAddress, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${getCookie('token')}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    dispatch({
                        type: 'GET_USER_FAILED',
                    })
                    dispatch(updateToken())
                    console.log('ошибка при получении данных' + res.status)
                    //return Promise.resolve(undefined);
                }
            })
            .then((data) => {
                if (data) {
                    dispatch({
                        type: 'GET_USER_SUCCESS',
                        payload: data,
                    })
                }
                setTimeout(() => {
                    dispatch(updateToken())
                },20 * 60 * 1000)
            })
            .catch((err) => {
                dispatch({
                    type: 'GET_USER_FAILED',
                })
                console.log('ошибка' + err)
            })
    }
}