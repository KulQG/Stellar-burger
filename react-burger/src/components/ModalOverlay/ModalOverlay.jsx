import React from 'react'
import ModalClass from './ModalOver.module.css'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

export default function ModalOverlay(props) {
  const dispatch = useDispatch()
  return (
    <div
      className={ModalClass.overlay}
      onClick={() => {
        props.close()
        dispatch({ type: 'REMOVE_CURRENT_CARD' })
      }}
    >
      {props.children}
    </div>
  )
}

ModalOverlay.propTypes = {
  close: PropTypes.func.isRequired,
}
