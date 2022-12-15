import React from 'react'
import navigStyles from './NavigationComponent.module.css'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function NavigationComponent(props) {
  const [isActive, setIsActive] = React.useState(true)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  //хедер передает пропс с нужной иконкой
  const setIcons = () => {
    if (props.icon === 'burger') {
      return <BurgerIcon type={classIcon} />
    } else if (props.icon === 'list') {
      return <ListIcon type={classIcon} />
    } else if (props.icon === 'profile') {
      return <ProfileIcon type={classIcon} />
    } else {
      console.log('error icons')
    }
  }

  //в зависимости от стейта определяется открыт компонент или нет
  const classIcon = `${isActive ? 'secondary' : 'primary'}`
  const classText = `${
    isActive
      ? 'text text_type_main-default text_color_inactive'
      : 'text text_type_main-default'
  }`

  return (
    <div className={navigStyles.chapter} onClick={handleClick}>
      {setIcons()}
      <p style={{ userSelect: 'none' }} className={classText}>{props.text}</p>
    </div>
  )
}
