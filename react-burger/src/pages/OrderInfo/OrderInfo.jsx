import Header from "../../components/Header/Header";
import { OrderInfoComponent } from "../../components/OrderInfoComponent/OrderInfoComponent";
import styles from './OrderInfo.module.css'

export function OrderInfo() {

    return (
        <div className={styles.mainWrap}>
            <Header />
            <OrderInfoComponent />
        </div>
    )
}