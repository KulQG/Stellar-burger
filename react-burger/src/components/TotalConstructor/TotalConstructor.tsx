import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import ConstructorStyles from "./totalConstructor.module.css";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FC } from "react";

export const TotalConstructor: FC = () => {
  return (
    <main className={ConstructorStyles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
};
