import React from 'react'
import appStyles from './App.module.css'
import Header from '../Header/Header'
import TotalConstructor from '../TotalConstructor/TotalConstructor'
//import {address} from '../../utils/consts.js'

function App() {

  const [state, setState] = React.useState({
    isLoading: true,
    cardData: []
  })

  React.useEffect(() => {
    const getData = async () => {
      setState({...state, loading: true});
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
      const data = await res.json();
      setState({ cardData: data.data, loading: false });
    };
    getData()
  },[])

  console.log(state.cardData)

  return (
    <>
      <Header />
      <TotalConstructor arr={state.cardData} />
    </>
  )
}

export default App
