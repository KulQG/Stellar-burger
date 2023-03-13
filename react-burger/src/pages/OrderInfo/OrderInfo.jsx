import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { OrderInfoComponent } from "../../components/OrderInfoComponent/OrderInfoComponent";
import { Feed } from "../Feed/Feed";
import { Orders } from "../Orders/Orders";
import styles from './OrderInfo.module.css'

export function OrderInfo() {
    const page = useSelector(s => s.orderPageHandler.page)
    const location = useLocation()
    const params = useParams()
    const id = params.id

    const openPopupPage = () => {
        if (location.pathname === `/feed/${id}`) {
            return <Feed />
        } else {
            return <Orders />
        }
    }

    if (page === 'page') {
        return (
            <div className={styles.mainWrap}>
                <Header />
                <OrderInfoComponent />
            </div>
        )
    } else {
        return (
            <>{openPopupPage()}</>
        )
    }
}