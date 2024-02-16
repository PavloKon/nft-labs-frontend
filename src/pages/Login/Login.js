import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../../components/Topbar'
import { FiMail } from 'react-icons/fi'
import { HiKey } from 'react-icons/hi'
import { useAuth0 } from '@auth0/auth0-react'
import google from '../../assets/icon/google.svg'
import loginImg from '../../assets/images/login.png'
import '../../assets/scss/login/login.scss'
import { LoginStatusContext } from '../../context/LoginStatusContext'

const Login = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0()

  const [account, setAccount] = useState({ email: '', password: '' })

  const { loginStatus, setLoginStatus } = useContext(LoginStatusContext)

  useEffect(() => {
    if (loginStatus) {
      navigate('/mynodes')
    }
  }, [loginStatus])

  const singINGoogle = () => {
    loginWithRedirect()
    if (isAuthenticated) {
      debugger;
      console.log('loginstatus', loginStatus)
      setLoginStatus(true)
      navigate('/mynodes')
    } else {
      debugger
      console.log('loginstatus', loginStatus)

      setLoginStatus(false)
      navigate('/login')
    }
  }

  const getprofile = () => {
    isAuthenticated && alert(user.name)
  }

  if (isLoading) {
    return <div>Loading ...</div>
  }

  const handelAccount = (property, event) => {
    const accountCopy = { ...account }
    accountCopy[property] = event.target.value
  }

  return (
    <div className="login-page">
      <Topbar />
      <section className="login-section">
        <div className="login">
          <img src={loginImg} alt="login" />
        </div>
        <div className="login-form">
          <h3 className="login-title">LOG IN</h3>
          <div className="input-box">
            <div className="icon">
              <FiMail />
            </div>
            <input
              name="email"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              placeholder="Enter Your Email Address / User Name "
              onChange={(event) => handelAccount('email', event)}
            ></input>
          </div>
          <div className="input-box">
            <div className="icon">
              <HiKey />
            </div>
            <input
              type="password"
              name="password"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              onChange={(event) => handelAccount('password', event)}
              placeholder="Password "
            ></input>
          </div>
          <div className="remember">
            <div className="remem">
              <input
                type="checkbox"
                className="remember_check"
                name="remember"
              />
              <span className="rememberMe bb_14"> Remember Me</span>
            </div>
            <span className="forgot">Forgot Password?</span>
          </div>

          <button
            className="btn-primary primaryBtn bb_18"
            onClick={singINGoogle}
          >
            LOG IN
          </button>
          <button className="signInGoogle" onClick={singINGoogle}>
            <img src={google} />
            <div className="google-text">SIGN IN GOOGLE</div>
          </button>

          <div className="signupLink">
            <span className="ask px-1">DON'T HAVE AN ACCOUNT?</span>
            <a href="/signup">SIGN UP</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
