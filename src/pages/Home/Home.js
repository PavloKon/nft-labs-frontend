import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Topbar from '../../components/Topbar'
import Banner from '../../components/Banner'
import Feature from '../../components/Feature'
import Node from '../../components/Node'
import Footer from '../../components/Footer'

import '../../assets/scss/home/home.scss'
import { LoginStatusContext } from '../../context/LoginStatusContext'

const Home = () => {
  const { getAccessTokenSilently, user } = useAuth0()
  const { setToken, loginStatus, setLoginStatus, logoClicked, setLogoClicked } =
    useContext(LoginStatusContext)
  const domain = 'dev---utwscq.us.auth0.com'
  // const domain = 'dev-luotntol.us.auth0.com'

  useEffect(() => {
    ;(async () => {
      if (user) {
        const token_info = await getAccessTokenSilently({
          // audience: `https://${domain}/api/v2/`,
          // scope: 'read:current_user',
          // audience: 'https://my.react.test/',
          // scope: 'read:get_stats',
        })
        // const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`

        // console.log('token_info', token_info)
        // const metadataResponse = await fetch(userDetailsByIdUrl, {
        //   headers: {
        //     Authorization: `Bearer ${token_info}`,
        //   },
        // })
        // console.log('metadataResponse', metadataResponse)

        localStorage.setItem('token', token_info)
        setToken(token_info)
      }
    })()
  }, [user])

  const navigate = useNavigate()

  useEffect(() => {
    if (loginStatus && !logoClicked) {
      // setLogoClicked(false)
      navigate('/mynodes')
    }
  }, [loginStatus])

  return (
    <div className="home-page">
      <Topbar />
      <Banner />
      <Feature />
      <Node />
      <Footer />
    </div>
  )
}

export default Home
