import { FC } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./Header.module.css";
import { NavigationComponent } from "../NavigationComponent/NavigationComponent";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();
  const navigToHome = () => {
    navigate("/");
  };

  const navigToList = () => {
    navigate("/feed");
  };

  const navigToProfile = () => {
    navigate("/profile");
  };

  return (
    <header className={headerStyles.content}>
      <div className={headerStyles.leftPanels}>
        <NavigationComponent
          click={navigToHome}
          text="Конструктор"
          icon="burger"
        />
        <NavigationComponent
          click={navigToList}
          text="Лента заказов"
          icon="list"
        />
      </div>
      <div style={{ cursor: "pointer" }} onClick={navigToHome}>
        <Logo />
      </div>
      <div className={headerStyles.rightPanel}>
        <NavigationComponent
          click={navigToProfile}
          text="Личный кабинет"
          icon="profile"
        />
      </div>
    </header>
  );
};
