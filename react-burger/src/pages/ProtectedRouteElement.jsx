import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, useLocation } from 'react-router-dom'

export const ProtectedRouteElement = ({ element }) => {
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
