import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Home from '../../pages/Home/Home'
import Register from '../../pages/Register/Register'
import ForgotPassword from '../../pages/Forgot-password/Forgot-password'
import ResetPassword from '../../pages/Reset-Password/Reset-Password'
import Profile from '../../pages/Profile/Profile'
import IngredientPage from '../../pages/IngredientPage/IngredientPage'
import NotFound from '../../pages/404/404'
import { ProtectedRouteElement } from '../../pages/ProtectedRouteElement'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../services/actions/getUser'
import { getFeed } from '../../services/actions/getFeed'

function App() {
  const dispatch = useDispatch()
  dispatch(getFeed())
  dispatch(getUser())
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/forgot-password"
          element={<ProtectedRouteElement element={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<ProtectedRouteElement element={<ResetPassword />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<Profile />} />}
        />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
