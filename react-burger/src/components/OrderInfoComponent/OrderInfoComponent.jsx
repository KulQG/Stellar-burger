import { useEffect, useState } from 'react'
import styles from './OrderInfoComponent.module.css'
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { IngredientCircle } from "../../components/IngredientCircle/IngredientCircle";
import { getCookie } from '../../utils/consts';

export function OrderInfoComponent() {
    const checkOpenWs = useSelector(s => s.checkOpenWs)
    const commonOrders = useSelector(s => s.wsReducer.orders)
    const userOrders = useSelector(s => s.userWsReducer.orders)

    const orders = checkOpenWs.feed ? commonOrders.orders : userOrders.orders

    const allIngredients = useSelector(s => s.feedReducer.feed)

    const [load, setLoad] = useState(false)

    const location = useLocation()
    const params = useParams()
    const id = params.id
    const path = location.pathname.split(`/${id}`)[0]

    const dispatch = useDispatch()

    useEffect(() => {
        if (orders.length > 0) {
            setLoad(true)
        } else {
            if (path === '/feed') {
                dispatch({
                    type: 'WS_CONNECTION_START',
                })
            } else {
                dispatch({
                    type: 'USER_WS_CONNECTION_START',
                })
            }
        }
    }, [orders])


    if (load) {
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

        const getStatus = () => {
            switch (order.status) {
                case 'done': {
                    return (
                        <p className="text text_type_main-default" style={{
                            marginBottom: '60px', color: "#00CCCC"
                        }}>
                            Выполнен
                        </p>
                    )
                };
                case 'created': {
                    return (
                        <p className="text text_type_main-default" style={{
                            marginBottom: '60px', color: "#00CCCC"
                        }}>
                            Готовится
                        </p>
                    )
                };
                case 'pending': {
                    return (
                        <p className="text text_type_main-default" style={{
                            marginBottom: '60px', color: "red"
                        }}>
                            Отменен
                        </p>
                    )
                }
            }
        }

        return (
            <>
                <div className={styles.wrap}>
                    <p className={`text text_type_digits-default ${styles.number}`}>
                        #{order.number}
                    </p>
                    <h1 style={{ marginBottom: '12px' }} className="text text_type_main-medium">
                        {order.name}
                    </h1>
                    {getStatus()}
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
            </>
        )
    }
}