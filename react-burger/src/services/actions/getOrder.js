import { postAddress } from "../../utils/consts"

export function getOrder(arr) {
    return function (dispatch) {
      const ids = () => {
        const idArr = arr.map((card) => card._id)
        return idArr
      }
      dispatch({
        type: 'GET_ORDER',
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
              type: 'GET_ORDER_FAILED',
            })
            console.log('ошибка при получении данных' + res.status)
          }
        })
        .then((data) => {
          dispatch({
            type: 'GET_ORDER_SUCCESS',
            order: data.order.number,
          })
        })
        .catch((err) => {
          dispatch({
            type: 'GET_ORDER_FAILED',
          })
          console.log('ошибка' + err)
        })
    }
  }