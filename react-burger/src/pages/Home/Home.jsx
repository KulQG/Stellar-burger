import Header from '../../components/Header/Header'
import TotalConstructor from '../../components/TotalConstructor/TotalConstructor'
import PopupHandler from '../../components/PopupHandler/PopupHandler'

export default function Home() {
  return (
    <>
      <Header />
      <TotalConstructor />
      <PopupHandler path={'/'} />
    </>
  )
}