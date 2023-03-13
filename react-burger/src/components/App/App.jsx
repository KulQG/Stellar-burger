import { useEffect } from 'react'
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
import { useDispatch } from 'react-redux'
import { getUser } from '../../services/actions/getUser'
import { getFeed } from '../../services/actions/getFeed'
import { Feed } from '../../pages/Feed/Feed'
import { OrderInfo } from '../../pages/OrderInfo/OrderInfo'
import { Orders } from '../../pages/Orders/Orders'
import { EditForm } from '../EditForm/EditForm'
import { checkToken } from '../../utils/consts'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFeed())

    if (checkToken()) {
      dispatch(getUser())
    }
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={
            <Profile>
              <EditForm />
            </Profile>}
          />}
        />
        <Route
          path='/profile/orders'
          element={<ProtectedRouteElement
            element={<Orders />}
          />}
        />
        <Route
          path='/profile/orders/:id'
          element={<ProtectedRouteElement
            element={<OrderInfo />}
          />}
        />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/feed/:id' element={<OrderInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
