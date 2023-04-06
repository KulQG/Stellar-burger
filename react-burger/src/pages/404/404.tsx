import React, { FC } from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import styles from './404.module.css'

export const NotFound: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.texts}>
          <h1 className="text text_type_digits-large">404</h1>
          <h2 className="text text_type_main-large">Страница не найдена :(</h2>
        </div>
        <Link className={styles.link} to="/">
          <Button htmlType="button" type="primary" size="medium">
            Перейти на главную страницу
          </Button>
        </Link>
      </div>
    </div>
  )
}
