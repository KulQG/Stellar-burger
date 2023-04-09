import { Header } from '../../components/Header/Header'
import {FC} from 'react'
import TotalConstructor from '../../components/TotalConstructor/TotalConstructor'
import {PopupHandler} from '../../components/PopupHandler/PopupHandler'

export const Home: FC = () => {
  return (
    <>
      <Header />
      <TotalConstructor />
      <PopupHandler path={'/'} />
    </>
  )
}