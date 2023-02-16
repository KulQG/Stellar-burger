import React from 'react'
import PropTypes from 'prop-types'
import navigStyles from './NavigationComponent.module.css'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function NavigationComponent(props) {
  const [isActive, setIsActive] = React.useState(false)
  const isActiveNow = props.isActive
  const setActive = props.setActive
  //console.log(setActive)

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

  const click = () => {
    setActive({type: props.icon})
    if (isActiveNow === props.icon) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  console.log(isActiveNow)

  //в зависимости от стейта определяется открыт компонент или нет
  const classIcon = `${!isActive ? 'secondary' : 'primary'}`
  const classText = `${
    !isActive
      ? 'text text_type_main-default text_color_inactive'
      : 'text text_type_main-default'
  }`

  return (
    <div onClick={click} className={navigStyles.chapter}>
      {setIcons()}
      <p className={`${classText} ${navigStyles.text}`}>{props.text}</p>
    </div>
  )
}

NavigationComponent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
