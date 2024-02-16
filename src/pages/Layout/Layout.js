import React, { useState } from 'react'
import Topbar from '../../components/Topbar'
import Footer from '../../components/Footer'
import Routers from '../../routes/routes'

const Layout = () => {
  const [loginStatus, setLoginStatus] = useState(true)

  return (
    <>
      {/* <Topbar loginStatus={loginStatus} /> */}
      <Routers />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
