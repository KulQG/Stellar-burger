import {
  GET_FEED,
  GET_FEED_SUCCESS,
  GET_FEED_FAILED,
  address,
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
  postAddress,
  postEmailAddress,
  registerAddress,
  authAddress,
  setCookie,
  resetPasswordAddress,
  getCookie,
} from '../../utils/consts'

export function getFeed() {
  return function (dispatch) {
    dispatch({
      type: GET_FEED,
    })
    fetch(address)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          dispatch({
            type: GET_FEED_FAILED,
          })
          console.log('ошибка при получении данных' + res.status)
        }
      })
      .then((data) => {
        dispatch({
          type: GET_FEED_SUCCESS,
          feed: data.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_FEED_FAILED,
        })
        console.log('ошибка' + err)
      })
  }
}

export function getOrder(arr) {
  return function (dispatch) {
    const ids = () => {
      const idArr = arr.map((card) => card._id)
      return idArr
    }
    dispatch({
      type: GET_ORDER,
    })
    fetch(postAddress, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: ids(),
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          dispatch({
            type: GET_ORDER_FAILED,
          })
          console.log('ошибка при получении данных' + res.status)
        }
      })
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: data.order.number,
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
        })
        console.log('ошибка' + err)
      })
  }
}

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
        let splitedAuthToken = authToken.split('Bearer ')[1]
        if (splitedAuthToken) {
          setCookie('token', splitedAuthToken)
        }
      })
      .catch((err) => {
        dispatch({
          type: 'AUTH_FAILED',
        })
        console.log('ошибка' + err)
      })
  }
}
