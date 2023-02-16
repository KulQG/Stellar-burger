import React from 'react'
import Header from '../Header/Header'
import TotalConstructor from '../TotalConstructor/TotalConstructor'
import OrderDetails from '../OrderDetails/OrderDetails'
import IngredientsDetails from '../IngredientsDetails/IngredientsDetails'
import Modal from '../Modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { getFeed } from '../../services/actions'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login  from '../../pages/Login/Login'
import Home from '../../pages/Home/Home'
import Register from '../../pages/Register/Register'
import ForgotPassword from '../../pages/Forgot-password/Forgot-password'
import ResetPassword from '../../pages/Reset-Password/Reset-Password'
import Profile from '../../pages/Profile/Profile'
import Ingredients from '../../pages/Ingredients/Ingredients'
import IngredientPage from '../../pages/IngredientPage/IngredientPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/ingredients' element={<Ingredients />}>
          <Route path=':id' element={<IngredientPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
