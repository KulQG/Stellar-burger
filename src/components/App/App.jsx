import React from 'react'
import appStyles from './App.module.css'
import Header from '../Header/Header'
import TotalConstructor from '../TotalConstructor/TotalConstructor'
import ingrsData from '../../utils/data.js'

function App() {
  return (
    <>
      <Header />
      <TotalConstructor arr={ingrsData} />
    </>
  )
}

export default App
