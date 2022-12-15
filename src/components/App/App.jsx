import React from 'react'
import appStyles from './App.module.css'
import Header from '../Header/Header'
import TotalConstructor from '../TotalConstructor/TotalConstructor'

function App() {
  return (
    <main className={appStyles.app}>
      <Header />
      <TotalConstructor />
   </main>
  )
}

export default App
