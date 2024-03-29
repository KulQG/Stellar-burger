import { useDrag, useDrop } from "react-dnd";
import styles from "./FillItem.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { TDraggedCard } from "../../services/types/data";
import { useDispatch } from "../../services/hooks";
import { SORTING } from "../../utils/constantsActions";

interface IFillItemProps {
  index: number;
  card: TDraggedCard;
  arr: TDraggedCard[];
  plus: (value: number, data: string) => void;
}

type TItem = TDraggedCard & { cardIndex: number; index: number };

export const FillItem: FC<IFillItemProps> = (props) => {
  const dispatch = useDispatch();
  const cardIndex: number = props.index;

  /////сортировка
  const [{ isDrag }, dragRef] = useDrag({
    type: "constructorItem",
    item: { ...props.card, cardIndex },
    collect: (m) => ({
      isDrag: m.isDragging(),
    }),
  });

  const [, dropItem] = useDrop({
    accept: "constructorItem",
    drop(item: TItem) {
      const dragIndex = item.cardIndex;
      const hoverIndex = props.index;
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const moveCard = (fromIndex: number, toIndex: number) => {
    const newCardList = Array.from(props.arr);
    const [removedCard] = newCardList.splice(fromIndex, 1);
    newCardList.splice(toIndex, 0, removedCard);
    dispatch({ type: SORTING, payload: newCardList });
  };

  const style = () => {
    if (isDrag) {
      return styles.transparent;
    } else {
      return styles.fillingElement;
    }
  };

  return (
    <div
      ref={(node) => {
        dragRef(dropItem(node));
      }}
      className={style()}
    >
      <DragIcon type="secondary" />
      <ConstructorElement
        text={props.card.name}
        price={props.card.price}
        thumbnail={props.card.image}
        handleClose={() => props.plus(props.card.price, props.card.id)}
      />
    </div>
  );
};
