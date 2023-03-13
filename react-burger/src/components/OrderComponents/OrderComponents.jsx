import { OrderComponent } from "../OrderComponent/OrderComponent"
import styles from './OrderComponents.module.css'

export function OrderComponents (props) {
    const socket = props.socket

    const getOrderComponents = () => {
        return socket.orders.map((order, index) => {
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