import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderComponents } from "../../components/OrderComponents/OrderComponents";
import PopupHandler from "../../components/PopupHandler/PopupHandler";
import Profile from "../Profile/Profile";

export function Orders() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'USER_WS_CONNECTION_START',
        })

        return () => {
            dispatch({ type: 'USER_WS_CONNECTION_CLOSE' })
        }
    }, [dispatch])

    const socket = useSelector((s) => s.userWsReducer.orders)

    return (
        <>
            <Profile>
                <OrderComponents socket={socket} />
            </Profile>
            <PopupHandler path={'/profile/orders'} />
        </>
    )
}