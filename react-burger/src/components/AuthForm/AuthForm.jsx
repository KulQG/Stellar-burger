import React from 'react'
import Header from '../Header/Header'
import styles from './AuthForm.module.css'

export default function AuthFormWrapper(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header} >
        <Header className={styles.header} />
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
  )
}
