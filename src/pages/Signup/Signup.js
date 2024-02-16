import React, { useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../../components/Topbar'
import { FiMail } from 'react-icons/fi'
import { HiKey } from 'react-icons/hi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { LoginStatusContext } from '../../context/LoginStatusContext'
import signupImg from '../../assets/images/signup.png'
import '../../assets/scss/signup/signup.scss'

const Signup = () => {
  const navigate = useNavigate()

  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0()

  const { loginStatus, setLoginStatus } = useContext(LoginStatusContext)

  const singINGoogle = () => {
    loginWithRedirect()
    if (isAuthenticated) {
      setLoginStatus(true)
      navigate('/mynodes')
    } else {
      setLoginStatus(false)
    }
  }

  return (
    <div className="signup-page">
      <Topbar />
      <section className="login-section">
        <div className="login">
          <img src={signupImg} alt="log image" />
        </div>
        <div className="login-form">
          <h3 className="login-title">SIGN UP</h3>
          <div className="input-box">
            <div className="icon">
              <HiOutlineUserCircle />
            </div>
            <input
              type="text"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              placeholder="Enter Your Full Name "
            ></input>
          </div>

          <div className="input-box">
            <div className="icon">
              <FiMail />
            </div>
            <input
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className="input-box">
            <div className="icon">
              <HiKey />
            </div>
            <input
              type="password"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              placeholder="Password "
            ></input>
          </div>
          <div className="remember">
            <div className="remem--signup">
              <input
                type="checkbox"
                className="remember_check"
                name="remember"
              />
              <div className="rememberMe--signup">
                I accept the terms and conditions, cookie policy and privacy
                policy. Send me vouchers and news on great promotions and the
                latest updates, competitions and news from Look Labs.
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn-primary primaryBtn"
            onClick={singINGoogle}
          >
            SIGN UP
          </button>
          <div className="signupLink bb_18">
            <span className="ask me-1">Already nave an account?</span>
            <a href="/signup">LOG IN</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
