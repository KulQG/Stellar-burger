import { resetPasswordAddress } from "../../utils/consts"
import { getCookie } from "../../utils/consts"

export function resetPassword(password) {
    return function (dispatch) {
      dispatch({ type: 'POST_PASSWORD' })
      fetch(resetPasswordAddress, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          token: getCookie('token')
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            dispatch({
              type: 'POST_PASSWORD_FAILED',
            })
            console.log('ошибка при получении данных' + res.status)
          }
        })
        .then((data) => {
          dispatch({
            type: 'POST_PASSWORD_SUCCESS',
            postPassword: data.success,
          })
        })
        .catch((err) => {
          dispatch({
            type: 'POST_PASSWORD_FAILED',
          })
          console.log('ошибка' + err)
        })
    }
  }