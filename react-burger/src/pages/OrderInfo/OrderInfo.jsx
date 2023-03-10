import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { OrderInfoComponent } from "../../components/OrderInfoComponent/OrderInfoComponent";
import { Feed } from "../Feed/Feed";
import styles from './OrderInfo.module.css'

export function OrderInfo() {
    const page = useSelector(s => s.orderPageHandler.page)

    if (page === 'page') {
        return (
            <div className={styles.mainWrap}>
                <Header />
                <OrderInfoComponent />
            </div>
        )
    } else {
        return <Feed />
    }
}