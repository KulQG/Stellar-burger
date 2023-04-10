import {ModalOverlay} from '../ModalOverlay/ModalOverlay'
import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalClass from './Modal.module.css'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { REMOVE_CURRENT_CARD } from '../../utils/constantsActions'

const modalRoot = document.getElementById('react-modals')

export interface IModalProps {
  close: () => void;
  children: ReactNode
}

interface KeyboardEventWithKey extends KeyboardEvent {
  key: string;
}

export const Modal:FC<IModalProps> = ({ close, children }) => {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEventWithKey) => {
      if (e.key === 'Escape') {
        close()
        dispatch({ type: REMOVE_CURRENT_CARD })
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const dispatch = useDispatch()

  return ReactDOM.createPortal(
    (<div className={ModalClass.modal}>
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
    </div>),
    modalRoot as HTMLElement
  )
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
}
