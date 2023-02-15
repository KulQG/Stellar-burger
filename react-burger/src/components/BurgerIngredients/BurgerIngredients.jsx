import React, { useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../Card/Card'
import BIngrStyles from './BurgerIngredients.module.css'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

export default function BurgerIngredients() {
  const [current, setCurrent] = useState('Булки')
  const arr = useSelector((store) => store.feedReducer.feed)
  const contRef = React.useRef(null)

  //разделение ингредиентов
  const headersWithCards = () => {
    //создание массивов с каждым типом продукта
    let buns = []
    let main = []
    let sauces = []

    arr.forEach((card) => {
      if (card.type === 'bun') {
        buns.push(card)
      } else if (card.type === 'main') {
        main.push(card)
      } else if (card.type === 'sauce') {
        sauces.push(card)
      }
    })

    //возврат разметки карточки
    //для каждого уникального массива
    const mapMethod = (arr) => {
      return arr.map((card) => {
        const id = uuidv4()
        return <Card post={card} key={id} />
      })
    }

    return (
      <>
        <h2 className="text text_type_main-medium">Булки</h2>
        <div className={BIngrStyles.cards}>{mapMethod(buns)}</div>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <div className={BIngrStyles.cards}>{mapMethod(sauces)}</div>
        <h2 className="text text_type_main-medium">Начинки</h2>
        <div className={BIngrStyles.cards}>{mapMethod(main)}</div>
      </>
    )
  }

  //Реализация сроллинга и изменения табов
  React.useEffect(() => {
    const container = contRef.current
    const handleScroll = () => {
      const distance = container.scrollTop
      if (distance === 0) {
        setCurrent('Булки')
      } else if (distance >= 353 && distance<=938) {
        setCurrent('Соусы')
      } else if (distance >= 939) {
        setCurrent('Начинки')
      }
    }

    contRef.current.addEventListener('scroll', handleScroll)
    //return () => {
    //  contRef.current.removeEventListener('scroll', handleScroll)
    //}
  }, [])

  const tab = () => {
    return (
      <nav className={BIngrStyles.tabs}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="Начинки"
          active={current === 'Начинки'}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </nav>
    )
  }

  return (
    <div className={BIngrStyles.catalog}>
      <h1 className="text text_type_main-large">Соберите Бургер</h1>
      {tab()}
      <div ref={contRef} className={BIngrStyles.products}>
        {headersWithCards()}
      </div>
    </div>
  )
}
