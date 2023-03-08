import styles from './IngredientCircle.module.css'

export function IngredientCircle (props) {
    const zIndex = props.zIndex
    return (
        <div
            key={props.id}
            className={styles.imgWrap}
            style={{ zIndex: zIndex }}
        >
            <img className={styles.img} src={props.img} alt="ингредиент" />
        </div>
    )
}