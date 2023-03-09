import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderComponents } from "../../components/OrderComponents/OrderComponents";
import { getCookie } from "../../utils/consts";
import Profile from "../Profile/Profile";

export function Orders() {
    const dispatch = useDispatch()

    const accessToken = getCookie('token').split('Bearer ')[1]

    useEffect(() => {
        dispatch({
            type: 'WS_CONNECTION_START',
            payload: `wss://norma.nomoreparties.space/orders?token=${accessToken}`
        })
    }, [])

    const socket = useSelector((s) => s.wsReducer.orders)

    return (
        <Profile>
            <OrderComponents socket={socket} />
        </Profile>
    )
}