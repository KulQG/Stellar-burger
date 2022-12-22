import ModalOverlay from '../ModalOverlay/ModalOverlay'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalClass from './Modal.module.css'
const modalRoot = document.getElementById('react-modals')

export default function Modal(props) {
  const rootClass = [ModalClass.modal]

  if (props.visual) {
    rootClass.push(ModalClass.active)
  }
  return ReactDOM.createPortal(
    (<div className={rootClass.join(' ')}>
      <ModalOverlay close={props.close} >
        <div className={ModalClass.content}>
          <div className={ModalClass.icon}>
            <CloseIcon onClick={props.close} type="secondary" />
          </div>
          {props.children}
        </div>
      </ModalOverlay>
    </div>),
    modalRoot,
  )
}
