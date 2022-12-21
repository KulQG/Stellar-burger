import React from 'react'
import ReactDOM from 'react-dom'
import ModalClass from './ModalOver.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
const modalRoot = document.getElementById('react-modals')

export default function ModalOverlay(props) {

  const rootClass = [ModalClass.modal]

  if (props.visual) {
    rootClass.push(ModalClass.active)
  }

  const handleEsc = React.useCallback((e) => {
    if (e.key === 'Escape') {
        props.close()
    }
  })

  React.useEffect(() => {
    document.addEventListener('keydown', handleEsc)

    return () => {
        document.removeEventListener('keydown', handleEsc)
    }
  }, [])
    
  return ReactDOM.createPortal(
    (<div className={rootClass.join(' ')} onClick={props.close}>
      <div className={ModalClass.modalContent} onClick={e => e.stopPropagation()} >
        <div className={ModalClass.icon} >
            <CloseIcon onClick={props.close} type="secondary" />
        </div>
        {props.children}
      </div>
    </div>),
    modalRoot
  )
}
