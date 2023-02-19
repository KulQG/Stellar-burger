import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'

export const ProtectedRouteElement = ({ element }) => {
  const user = useSelector((s) => s.authReducer.auth.success)
  const [isLoaded, setLoaded] = useState(false)

  const init = async () => {
    await user
    setLoaded(true)
  }

  useEffect(() => {
    init()
  }, [])

  if (!isLoaded) {
    return null
  }

  return user ? element : <Navigate to="/login" replace />
}
