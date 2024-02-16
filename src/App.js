import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import { LoginStatusContext } from './context/LoginStatusContext'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0()

  const [loginStatus, setLoginStatus] = useState(isAuthenticated ? true : false)
  const [token, setToken] = useState(isAuthenticated ? true : false)
  const [logoClicked, setLogoClicked] = useState(false)

  useEffect(() => {
    if (isAuthenticated) setLoginStatus(true)
    else setLoginStatus(false)
  }, [isAuthenticated])

  return (
    <LoginStatusContext.Provider
      value={{
        loginStatus,
        setLoginStatus,
        user,
        token,
        setToken,
        logoClicked,
        setLogoClicked,
      }}
    >
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LoginStatusContext.Provider>
  )
}

export default App
