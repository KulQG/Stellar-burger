import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'
import styles from './OrderComponent.module.css'

export function OrderComponent(props) {

    const allIngredients = useSelector(s => s.feedReducer.feed)
    const currentIds = props.ingrs

    const objects = currentIds.map(id => allIngredients.find(ingr => ingr._id === id))

    const images = objects.map(obj => obj && obj.image_mobile)

    const getImages = () => {
        const maxImages = 6;
        const visibleImages = images.slice(0, maxImages);
        const hiddenImageCount = Math.max(images.length - maxImages, 0);

        return visibleImages.map((img, index) => {
            const id = index;
            const zIndex = images.length - index;

            if (hiddenImageCount === 0 && index < 5) {
                return (
                    <div
                        key={id}
                        className={styles.imgWrap}
                        style={{ zIndex: zIndex }}
                    >
                        <img className={styles.img} src={img} alt="ингредиент" />
                    </div>
                )
            } else if (hiddenImageCount > 0 && index === 5) {
                return (
                    <div
                        key={id}
                        className={`${styles.imgWrap}`}
                        style={{ zIndex: zIndex }}
                    >
                        <div className={styles.sixth} style={{ backgroundImage: `url(${img})` }} >
                            <div className={styles.over}>
                                <p className="text text_type_main-default">
                                    {`+${hiddenImageCount}`}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            } else if (hiddenImageCount > 0 && index < 5) {
                return (
                    <div
                        key={id}
                        className={styles.imgWrap}
                        style={{ zIndex: zIndex }}
                    >
                        <img className={styles.img} src={img} alt="ингредиент" />
                    </div>
                )
            }
        })
    }

    const prices = objects.map(obj => obj && obj.price)
    const totalPrice = prices.reduce((price, acc) => price + acc, 0)

    return (
        <div key={props.key} className={styles.wrap}>
            <div className={styles.date}>
                <p className="text text_type_digits-default">{props.num}</p>
            </div>
            <h3 className={`text text_type_main-medium ${styles.name}`}>{props.name}</h3>
            <div className={styles.data}>
                <div className={styles.ingrs}> {getImages()} </div>
                <div className={styles.price}>
                    <p className="text text_type_digits-default">{totalPrice}</p>
                    <CurrencyIcon type='primary' />
                </div>
            </div>
        </div>
    )
}