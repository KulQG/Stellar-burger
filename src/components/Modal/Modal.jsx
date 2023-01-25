import ModalOverlay from '../ModalOverlay/ModalOverlay'
import React from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalClass from './Modal.module.css'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
const modalRoot = document.getElementById('react-modals')

export default function Modal({close, children}) {
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        close()
        dispatch({ type: 'REMOVE_CURRENT_CARD' })
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const dispatch = useDispatch()

  return ReactDOM.createPortal(
    <div className={ModalClass.modal}>
      <ModalOverlay close={close}>
        <div
          className={ModalClass.content}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className={ModalClass.icon}>
            <CloseIcon
              onClick={() => {
                close()
                dispatch({ type: 'REMOVE_CURRENT_CARD' })
              }}
              type="secondary"
            />
          </div>
          {children}
        </div>
      </ModalOverlay>
    </div>,
    modalRoot,
  )
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
}
