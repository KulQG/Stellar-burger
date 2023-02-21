import {
    getCookie,
    getUserAddress,
  } from '../../utils/consts'
  
  export function getUser() {
    return function (dispatch) {
      dispatch({
        type: 'GET_USER',
      })
      fetch(getUserAddress, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${getCookie('token')}`
        }
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            dispatch({
              type: 'GET_USER_FAILED',
            })
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