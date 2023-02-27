import { updateCookieAddress, setCookie } from "../../utils/consts"
import { getUser } from "./getUser"

export function updateToken() {
    return function (dispatch) {
        dispatch({ type: 'UPDATE-TOKEN' })
        fetch(updateCookieAddress, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    dispatch({
                        type: 'UPDATE-TOKEN_FAILED',
                    })
                    console.log('ошибка при получении данных' + res.status)
                }
            })
            .then((data) => {
                dispatch({
                    type: 'UPDATE-TOKEN_SUCCESS',
                    payload: data,
                })
                console.log(data)
                let authToken = data.accessToken
                setCookie('token', authToken, '/')
                localStorage.clear()
                const refreshToken = data.refreshToken
                localStorage.setItem('refreshToken', refreshToken)
                dispatch(getUser())
            })
            .catch((err) => {
                dispatch({
                    type: 'UPDATE-TOKEN_FAILED',
                })
                console.log('ошибка' + err)
            })
    }
}