import React, { FC } from "react";
import { Header } from "../Header/Header";
import styles from "./AuthForm.module.css";

interface IAuthProps {
  submit: React.FormEventHandler<HTMLFormElement>;
  heading: string;
  form: () => React.ReactNode;
  uiLinks: () => React.ReactNode;
}

export const AuthFormWrapper: FC<IAuthProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.auth}>
        <form onSubmit={props.submit} className={styles.form}>
          <h1 className={`text text_type_main-large ${styles.heading}`}>
            {props.heading}
          </h1>
          {props.form()}
        </form>
        <div className={styles.uiLinks}> {props.uiLinks()} </div>
      </div>
    </div>
  );
};
