import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import ConstructorStyles from "./totalConstructor.module.css";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import MultiBackend, { createTransition } from "react-dnd-multi-backend";
import { FC } from "react";

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
    },
    {
      backend: TouchBackend,
      preview: true,
      transition: createTransition("touchstart", (event) => {
        return (event as TouchEvent).touches != null;
      }),
    },
  ],
};

export const TotalConstructor: FC = () => {
  return (
    <main className={ConstructorStyles.main}>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
};
