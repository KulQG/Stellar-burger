import { useState, useEffect, FC, ReactNode } from 'react'
import { useSelector } from '../services/hooks'
import {  Navigate, useLocation } from 'react-router-dom'

interface IProtectedElProp {
  element: ReactNode | any
}

export const ProtectedRouteElement: FC<IProtectedElProp> = ({ element }) => {
  const user = useSelector((s) => s.getUserReducer.getUser.success)
  const [isLoaded, setLoaded] = useState(false)

  const init = async () => {
    await user
    setLoaded(true)
  }

  useEffect(() => {
    init()
  }, [])

  const location = useLocation()

  if (!isLoaded) {
    return null
  }

  return user ? element : <Navigate to={`/login?path=${location.pathname}`} replace />
}
