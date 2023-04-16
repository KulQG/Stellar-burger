import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useState, FC, SyntheticEvent } from "react";
import {
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthFormWrapper } from "../../components/AuthForm/AuthForm";
import { auth } from "../../services/actions/auth";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/hooks";

interface IChange {
  email: boolean;
  password: boolean;
}

export const Login: FC = () => {
  const [change, setChange] = useState<IChange>({
    email: false,
    password: false,
  });

  const [email, setEmail] = React.useState<string>("");
  const onChangeEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setChange({
      ...change,
      email: true,
    });
  };

  const [password, setPassword] = React.useState<string>("");
  const onChangePassword = (e: SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setChange({
      ...change,
      password: true,
    });
  };

  const authState = useSelector((s) => s.getUserReducer.getUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(auth([email, password]));
  };

  const location = useLocation();
  const locationBefore = location.search.split("?path=")[1];

  useEffect(() => {
    if (authState.success) {
      if (location.search) {
        navigate(locationBefore, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [authState]);

  const getButton = () => {
    if (change.email && change.password) {
      return (
        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      );
    }
  };

  const getForm = (): JSX.Element => {
    return (
      <>
        <EmailInput
          value={email}
          name={"email"}
          onChange={onChangeEmail}
          size={"default"}
          placeholder="E-mail"
        />
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={"password"}
          placeholder={"Пароль"}
        />
        {getButton()}
      </>
    );
  };

  const getUILinks = () => {
    return (
      <>
        <div className={styles.link}>
          <p className="text text_type_main-default">
            Вы — новый пользователь?
          </p>
          <Link className={styles.text} to="/register">
            <p
              className={`${styles.text} ${styles.textLink} text text_type_main-default`}
            >
              Зарегистрироваться
            </p>
          </Link>
        </div>
        <div className={styles.link}>
          <p className="text text_type_main-default"> Забыли пароль?</p>
          <Link className={styles.text} to="/forgot-password">
            <p
              className={`${styles.text} ${styles.textLink} text text_type_main-default`}
            >
              Восстановить пароль
            </p>
          </Link>
        </div>
      </>
    );
  };

  if (!authState.success) {
    return (
      <AuthFormWrapper
        submit={onClick}
        heading={"Вход"}
        form={getForm}
        uiLinks={getUILinks}
      />
    );
  } else {
    return <Navigate to={locationBefore || "/"} replace />;
  }
};
