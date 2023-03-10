import OrderDetails from '../../components/OrderDetails/OrderDetails'
import IngredientsDetails from '../../components/IngredientsDetails/IngredientsDetails'
import Modal from '../../components/Modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { OrderInfoComponent } from '../OrderInfoComponent/OrderInfoComponent'

export default function PopupHandler(props) {
    const dispatch = useDispatch()
    const isPopup = useSelector(s => s.setPopup.popupState)
    const checkingPopup = useSelector(s => s.checkPopup)

    const navigate = useNavigate()

    const closePopup = () => {
        dispatch({ type: 'CLOSE_POPUP' })
        navigate(props.path)
    }

    const definePopup = () => {
        if (checkingPopup.ingr) {
            return <IngredientsDetails />
        } else if (checkingPopup.order) {
            return <OrderDetails />
        } else if (checkingPopup.orderInfo) {
            return <OrderInfoComponent />
        }
    }

    if (isPopup) {
        return <Modal close={closePopup}>{definePopup()}</Modal>
    }
}