import { postEmailAddress } from "../../utils/consts"

export function forgotPassword(email) {
    return function (dispatch) {
      dispatch({ type: 'POST_EMAIL' })
      fetch(postEmailAddress, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            dispatch({
              type: 'POST_EMAIL_FAILED',
            })
            console.log('ошибка при получении данных' + res.status)
          }
        })
        .then((data) => {
          dispatch({
            type: 'POST_EMAIL_SUCCESS',
            postEmail: data.success,
          })
        })
        .catch((err) => {
          dispatch({
            type: 'POST_EMAIL_FAILED',
          })
          console.log('ошибка' + err)
        })
    }
  }