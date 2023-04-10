import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useState, FC, ChangeEvent, FormEvent } from "react";
import {
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Reset-Password.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthFormWrapper } from "../../components/AuthForm/AuthForm";
import { useSelector, useDispatch } from "../../services/hooks";
import { resetPassword } from "../../services/actions/reset-password";

export const ResetPassword: FC = () => {
  const [change, setChange] = useState<{ password: boolean; code: boolean }>({
    password: false,
    code: false,
  });

  const [password, setPassword] = React.useState<string>("");
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setChange({
      ...change,
      password: true,
    });
  };
  const [code, setCode] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const click = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(password, code));
  };

  const reset = useSelector((s) => s.resetPasswordReducer.postPassword);
  React.useEffect(() => {
    if (reset.success) {
      navigate("/login", { replace: true });
    }
  }, [reset]);

  const getButton = () => {
    if (change.code && change.password) {
      return (
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      );
    }
  };

  const getForm = () => {
    return (
      <>
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={"password"}
          placeholder={"Пароль"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => {
            setCode(e.target.value);
            setChange({ ...change, code: true });
          }}
          value={code}
          name={"code"}
          ref={inputRef}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
        {getButton()}
      </>
    );
  };

  const getUILinks = () => {
    return (
      <div className={styles.link}>
        <p className="text text_type_main-default">Вспомнили пароль?</p>
        <Link className={styles.text} to="/login">
          <p
            className={`${styles.text} ${styles.textLink} text text_type_main-default`}
          >
            Войти
          </p>
        </Link>
      </div>
    );
  };

  const user = useSelector((s) => s.getUserReducer.getUser);
  const forgot = useSelector((s) => s.postForgotReducer.postEmail);
  const [userState, setUserState] = useState<boolean>(false);

  useEffect(() => {
    setUserState(true);
  }, [forgot, user]);

  if (userState) {
    if (!user.success) {
      return (
        <AuthFormWrapper
          heading="Восстановление пароля"
          form={getForm}
          uiLinks={getUILinks}
          submit={click}
        />
      );
    } else {
      return <Navigate to="/" replace />;
    }
  } else {
    return null;
  }
};
