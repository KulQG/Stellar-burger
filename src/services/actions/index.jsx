import {
  GET_FEED,
  GET_FEED_SUCCESS,
  GET_FEED_FAILED,
  address,
} from '../../utils/consts'

export function getFeed() {
  return function (dispatch) {
    dispatch({
      type: GET_FEED,
    })
    fetch(address)
      .then((res) => {
        if (res.ok) {
          const data = res.json()
          dispatch({
            type: GET_FEED_SUCCESS,
            feed: data,
          })
          console.log(data)
        } else {
          dispatch({
            type: GET_FEED_FAILED,
          })
          console.log('ошибка при получении данных' + res.status)
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_FEED_FAILED,
        })
        console.log('ошибка' + err)
      })
  }
}
