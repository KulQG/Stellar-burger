import styles from './Profile.module.css'
import { NavLink } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useDispatch } from 'react-redux'
import { logout } from '../../services/actions/logout'
import { EditForm } from '../../components/EditForm/EditForm'

export default function Profile(props) {

  const dispatch = useDispatch()

  const textLink = {
    textDecoration: 'none',
  }
  const activeText = {
    color: 'white',
    textDecoration: 'none',
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.profile}>
        <div className={styles.panel}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={styles.link}>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? `text text_type_main-medium`
                    : `text text_type_main-medium text_color_inactive`
                }
                style={({ isActive }) => (isActive ? activeText : textLink)}
              >
                Профиль
              </NavLink>
            </div>
            <div className={styles.link}>
              <NavLink
                to="orders"
                className={({ isActive }) =>
                  isActive
                    ? `text text_type_main-medium`
                    : `text text_type_main-medium text_color_inactive`
                }
                style={({ isActive }) => (isActive ? activeText : textLink)}
              >
                История заказов
              </NavLink>
            </div>
            <div className={styles.link}>
              <p
                onClick={() => dispatch(logout())}
                className={`text text_type_main-medium text_color_inactive ${styles.logout}`}
              >
                Выход
              </p>
            </div>
          </div>
          <p className="text text_type_main-default text_color_inactive">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        {props.children}
      </div>
    </div>
  )
}
