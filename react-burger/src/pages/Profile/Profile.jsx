import styles from './Profile.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useDispatch } from 'react-redux'
import { logout } from '../../services/actions/logout'

export default function Profile(props) {

  const dispatch = useDispatch()

  const location = useLocation()
  const setActiveLinkOrders = () => {
    if (location.pathname === `/profile/orders`) {
      return `text text_type_main-medium`
    } else {
      return `text text_type_main-medium text_color_inactive`
    }
  }

  const setActiveLinkAccount = () => {
    if (location.pathname === `/profile`) {
      return `text text_type_main-medium`
    } else {
      return `text text_type_main-medium text_color_inactive`
    }
  }

  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.profile}>
        <div className={styles.panel}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div onClick={() => navigate('/profile')} className={styles.link}>
              <p className={setActiveLinkAccount()} >Профиль</p>
            </div>
            <div onClick={() => navigate('orders')} className={styles.link}>
              <p className={setActiveLinkOrders()}>История заказов</p>
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
