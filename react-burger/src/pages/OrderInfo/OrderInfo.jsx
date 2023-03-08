import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { IngredientCircle } from "../../components/IngredientCircle/IngredientCircle";
import styles from './OrderInfo.module.css'

export function OrderInfo() {
    const orders = useSelector(s => s.wsReducer.orders.orders)
    const allIngredients = useSelector(s => s.feedReducer.feed)

    const location = useLocation()
    const pathname = location.pathname
    const id = pathname.split('/orders/')[1]

    const order = orders.find((obj) => obj._id === id)
    const ingrs = order.ingredients
    const objects = ingrs.map(id => allIngredients.find(ingr => ingr._id === id))

    const getComposition = () => {
        return objects.map((obj, index) => {
            const count = objects.filter(i => i === obj)

            if (objects.indexOf(obj) === index) {
                return (
                    <div key={obj._id} className={styles.ingr}>
                        <div style={{ marginRight: '15px' }} >
                            <IngredientCircle id={obj._id} zIndex={1} img={obj.image_mobile} />
                        </div>
                        <div className={styles.ingrName} >
                            <p className={`text text_type_main-default`}>
                                {obj.name}
                            </p>
                        </div>
                        <div className={styles.price}>
                            <p className="text text_type_digits-default">{count.length} x {obj.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                )
            } else {
                return null
            }
        }).filter(Boolean)
    }

    const prices = objects.map(obj => obj.price)
    const price = prices.reduce((acc, price) => acc + price, 0)

    return (
        <div className={styles.mainWrap}>
            <Header />
            <div className={styles.wrap}>
                <p className={`text text_type_digits-default ${styles.number}`}>
                    #{order.number}
                </p>
                <h1 style={{ marginBottom: '12px' }} className="text text_type_main-medium">
                    {order.name}
                </h1>
                <p className="text text_type_main-default" style={{
                    marginBottom: '60px', color: "#00CCCC"
                }}>
                    Выполнен
                </p>
                <p style={{ marginBottom: '24px' }} className="text text_type_main-medium">
                    Состав:
                </p>
                <div className={styles.structure}>
                    {getComposition()}
                </div>
                <div className={styles.dateAndPrice}>
                    <p className="text text_type_main-default text_color_inactive">
                        <FormattedDate date={new Date(order.updatedAt)} />
                        {` i-GMT+3`}
                    </p>
                    <div className={styles.totalPrice}>
                        <p className="text text_type_digits-default ">{price}</p>
                        <CurrencyIcon type='primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}