import { useDrag } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid'
import styles from './FillItem.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function FillItem(props) {
  const id = uuidv4()

  const [{ isDrag }, dragRef] = useDrag({
    type: 'constructorItem',
    item: props.card,
    collect: (m) => ({
      isDrag: m.isDragging(),
    }),
  })

  return (
    <div ref={dragRef} className={styles.fillingElement} key={id}>
      <DragIcon type="secondary" />
      <ConstructorElement
        text={props.card.name}
        price={props.card.price}
        thumbnail={props.card.image}
        handleClose={() => props.plus(props.card.price, props.card.id)}
      />
    </div>
  )
}
