import {
    authAddress,
    setCookie,
} from '../../utils/consts'

export function auth([email, password]) {
    return function (dispatch) {
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
            headers: {
                'Content-Type': 'application/json',
            },
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
            })
            .catch((err) => {
                dispatch({
                    type: 'AUTH_FAILED',
                })
                console.log('ошибка' + err)
            })
    }
}