import { useSelector } from "../../services/hooks";
import { Header } from "../../components/Header/Header";
import { IngredientsDetails } from "../../components/IngredientsDetails/IngredientsDetails";
import { Home } from "../Home/Home.js";
import styles from "./IngredientPage.module.css";

export const IngredientPage = () => {
  const page = useSelector((s) => s.ingrPageHandler.page);

  if (page === "page") {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <IngredientsDetails />
        </div>
      </div>
    );
  } else {
    return <Home />;
  }
};
