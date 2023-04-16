import { FC } from "react"
import { IWsObj } from "../../services/types/data"
import { OrderComponent } from "../OrderComponent/OrderComponent"
import styles from './OrderComponents.module.css'

interface IOrderCompntProp {
    socket: {orders: IWsObj[]}
}

export const OrderComponents:FC<IOrderCompntProp> = (props) => {
    const socket = props.socket
    console.log(socket.orders)

    const getOrderComponents = () => {
        return socket.orders.map((order: IWsObj, index: number) => {
            const id = index
            return (
                <OrderComponent
                    key={id}
                    num={order.number}
                    name={order.name}
                    ingrs={order.ingredients}
                    date={order.updatedAt}
                    id={order._id}
                />
            )
        })
    }
    return (
        <div className={styles.road}>{getOrderComponents()}</div>
    )
}