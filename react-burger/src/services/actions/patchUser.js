import {
    getCookie,
    getUserAddress,
} from '../../utils/consts'
import { updateToken } from './updateToken'

export function patchUser([email, name, password]) {
    return function (dispatch) {
        dispatch({
            type: 'GET_USER',
        })
        fetch(getUserAddress, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${getCookie('token')}`
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
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
                }
            })
            .then((data) => {
                if (data) {
                    dispatch({
                        type: 'GET_USER_SUCCESS',
                        payload: data,
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: 'GET_USER_FAILED',
                })
                console.log('ошибка' + err)
            })
    }
}