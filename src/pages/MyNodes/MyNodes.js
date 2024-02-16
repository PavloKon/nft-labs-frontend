import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import Topbar from '../../components/Topbar'
import Banner from '../../components/MyNodes/Banner'
import NodeCards from '../../components/MyNodes/NodeCards'
import GameCard from '../../components/MyNodes/GameCard'
import TransactionHistory from '../../components/MyNodes/TransactionHistory'
import Footer from '../../components/Footer'
import '../../assets/scss/mynodes/mynodes.scss'
import { LoginStatusContext } from '../../context/LoginStatusContext'

const MyNodes = () => {
  // const { token } = useContext(LoginStatusContext)
  const [userStats, setUserStats] = useState(null)
  const { user, getAccessTokenSilently } = useAuth0()
  const token = localStorage.getItem('token')

  // const token =
  //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Inh3TUphWHo3VlZMWXo2ODh6TWZjMCJ9.eyJpc3MiOiJodHRwczovL2Rldi0tLXV0d3NjcS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjI1ZjM1ZTE5OWRlNmQwMDY5ZmJjYjRkIiwiYXVkIjoiaHR0cHM6Ly9sb29rbGFicy5jb20vYXBpIiwiaWF0IjoxNjU0MTEzNjE4LCJleHAiOjE2NTQyMDAwMTgsImF6cCI6IkRwR3ZkY1pGWXhuMzN4YWpqYjRndGxpdUcweVM2d1NLIiwiZ3R5IjoicGFzc3dvcmQifQ.cbF_sUf5drwvGgncGOKPXZ0YfRlvQx-N9LkIOp8zXE84-sTr1wlq0PyltN9ZWCZmulCrF2D5ONIO7LBsBGMhq01jvtPDYA0cOttMpdVZ_SnM8GqC6yfGJOx_TcvRAEY7SPdMUHaDQRqAPKxZZq1jk0n4hmNvVdle2xG-k2onBR9IyEnOnyNmSrQLpFTbVacr9wijArHFvBO4apoakgeP-mXrb_upt0tHOPyj0UFTdLY9uEGhGB-qXbdK_WHoXDJGzpmAOJ4k0b5LYVxNC3MgnJXdD5-iQ07vUXSgLYp1MeSReqpNAMuJ0tFQAb_CK8X-ePyMdyyz7A-EkTvYFFb-4w'

  useEffect(() => {
    // ;(async () => {
    // const token = await getAccessTokenSilently({
    //   // audience: process.env.REACT_APP_appUrl,
    //   // audience: 'https://my.react.test/',
    //   // scope: 'read:get_stats',
    // })
    // setToken(token)
    console.log('Mynode page', token)
    token &&
      axios
        .get(process.env.REACT_APP_baseUrl + '/users/stats', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('users/stats    response', response.data)
          setUserStats(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    // })()
  }, [getAccessTokenSilently, user?.sub])

  return (
    <div className="full-container">
      <Topbar loginStatus={true} />
      <Banner />
      <NodeCards userStats={userStats} />
      <GameCard />
      <TransactionHistory />
      <Footer />
    </div>
  )
}

export default MyNodes
