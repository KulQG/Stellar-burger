import { deleteCookie, logoutAddress } from "../../utils/consts"

export function logout() {
    return function (dispatch) {
      fetch(logoutAddress, {
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
            console.log('ошибка при получении данных' + res.status)
          }
        })
        .then((data) => {
          if (data.success) {
            localStorage.clear()
            deleteCookie('token')
            dispatch({
                type: 'DELETE_USER'
            })
          }
        })
        .catch((err) => {
          dispatch({
            type: 'LOGOUT_FAILED',
          })
          console.log('ошибка' + err)
        })
    }
  }