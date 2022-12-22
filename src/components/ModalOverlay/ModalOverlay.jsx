import React from 'react'
import ModalClass from './ModalOver.module.css'

export default function ModalOverlay(props) {
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
  })

  return (<div className={ModalClass.overlay} onClick={props.close} >{props.children}</div>)
}
