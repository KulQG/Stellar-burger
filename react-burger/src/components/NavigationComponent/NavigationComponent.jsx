import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import navigStyles from './NavigationComponent.module.css'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NavigationComponent(props) {
  const [isActive, setIsActive] = React.useState(false)

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

  const location = useLocation()
  useEffect(() => {
    if (location.pathname==='/' && props.icon==='burger') {
      setIsActive(true)
    } else if (location.pathname==='/profile' && props.icon==='profile') {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [location])

  //в зависимости от стейта определяется открыт компонент или нет
  const classIcon = `${!isActive ? 'secondary' : 'primary'}`
  const classText = `${
    !isActive
      ? 'text text_type_main-default text_color_inactive'
      : 'text text_type_main-default'
  }`
  return (
    <div onClick={props.click} className={navigStyles.chapter}>
      {setIcons()}
      <p className={`${classText} ${navigStyles.text}`}>{props.text}</p>
      {props.children}
    </div>
  )
}

NavigationComponent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
