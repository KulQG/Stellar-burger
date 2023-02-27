import { registerAddress } from "../../utils/consts"

export function register([email, password, name]) {
    return function (dispatch) {
      dispatch({ type: 'REGISTER' })
      fetch(registerAddress, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            dispatch({
              type: 'REGISTER_FAILED',
            })
            console.log('ошибка при получении данных' + res.status)
          }
        })
        .then((data) => {
          dispatch({
            type: 'REGISTER_SUCCESS',
            payload: data,
          })
        })
        .catch((err) => {
          dispatch({
            type: 'REGISTER_FAILED',
          })
          console.log('ошибка' + err)
        })
    }
  }