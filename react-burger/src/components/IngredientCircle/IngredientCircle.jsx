import styles from './IngredientCircle.module.css'

export function IngredientCircle (props) {
    const zIndex = props.zIndex
    const id = props.id
    return (
        <div
            key={id}
            className={styles.imgWrap}
            style={{ zIndex: zIndex }}
        >
            <img className={styles.img} src={props.img} alt="ингредиент" />
        </div>
    )
}