import { FC } from 'react'
import ModalClass from './ModalOver.module.css'
import { useDispatch } from '../../services/hooks'
import { IModalProps } from '../Modal/Modal'
import { REMOVE_CURRENT_CARD } from '../../utils/constantsActions'

export const ModalOverlay:FC<IModalProps> = (props) => {
  const dispatch = useDispatch()
  return (
    <div
      className={ModalClass.overlay}
      onClick={() => {
        props.close()
        dispatch({ type: REMOVE_CURRENT_CARD })
      }}
    >
      {props.children}
    </div>
  )
}
