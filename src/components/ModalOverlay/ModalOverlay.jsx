import React from 'react'
import ModalClass from './ModalOver.module.css'
import PropTypes from 'prop-types'

export default function ModalOverlay(props) {

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
  })

  return (<div className={ModalClass.overlay} onClick={props.close} >{props.children}</div>)
}

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired
}
