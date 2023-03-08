import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCookie } from "../../utils/consts";

export function Orders() {
    const dispatch = useDispatch()
    const accessToken = getCookie('token').split('Bearer ')[1]
    console.log(accessToken)
    useEffect(() => {
        dispatch({
            type: 'WS_CONNECTION_START',
            payload: `wss://norma.nomoreparties.space/orders?token=${accessToken}`
        })
    }, [])
}