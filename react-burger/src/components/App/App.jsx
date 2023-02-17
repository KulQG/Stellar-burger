import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Home from '../../pages/Home/Home'
import Register from '../../pages/Register/Register'
import ForgotPassword from '../../pages/Forgot-password/Forgot-password'
import ResetPassword from '../../pages/Reset-Password/Reset-Password'
import Profile from '../../pages/Profile/Profile'
import Ingredients from '../../pages/Ingredients/Ingredients'
import IngredientPage from '../../pages/IngredientPage/IngredientPage'
import NotFound from '../../pages/404/404'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ingredients" element={<BurgerIngredients />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
