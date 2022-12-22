import ModalOverlay from '../ModalOverlay/ModalOverlay'
import React from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalClass from './Modal.module.css'
import PropTypes from 'prop-types'
const modalRoot = document.getElementById('react-modals')

export default function Modal(props) {

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        props.close()
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  },[])

  return ReactDOM.createPortal(
    <div className={ModalClass.modal}>
      <ModalOverlay close={props.close}>
        <div
          className={ModalClass.content}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className={ModalClass.icon}>
            <CloseIcon onClick={props.close} type="secondary" />
          </div>
          {props.children}
        </div>
      </ModalOverlay>
    </div>,
    modalRoot,
  )
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
}
