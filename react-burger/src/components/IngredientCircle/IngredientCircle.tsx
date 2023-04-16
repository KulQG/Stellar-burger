import { FC } from "react";
import styles from "./IngredientCircle.module.css";

interface ICircleProps {
  zIndex: number;
  id: string | number;
  img: string;
}

export const IngredientCircle: FC<ICircleProps> = (props) => {
  const zIndex = props.zIndex;
  const id = props.id;
  return (
    <div key={id} className={styles.imgWrap} style={{ zIndex: zIndex }}>
      <img className={styles.img} src={props.img} alt="ингредиент" />
    </div>
  );
};
