import React from 'react'
import { useSelector } from 'react-redux'
import classes from './IngredientsDetails.module.css'

export default function IngredientsDetails() {
  const card = useSelector(store => store.currentCard.post)
  return (
    <div className={classes.box}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <div className={classes.card}>
        <div className={classes.img}>
          <img className={classes.imgContent} src={card.image_large} alt={card.name} />
        </div>
        <p className={`text text_type_main-medium ${classes.text}`}>{card.name}</p>
        <div className={classes.info}>
          <div className={classes.infoElement}>
            <p className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {card.calories}
            </p>
          </div>
          <div className={classes.infoElement}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {card.proteins}
            </p>
          </div>
          <div className={classes.infoElement}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {card.fat}
            </p>
          </div>
          <div className={classes.infoElement}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {card.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
