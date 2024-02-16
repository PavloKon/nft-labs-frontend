import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import logoImgage from '../../assets/images/logo.png'
import loginRightIconImage from '../../assets/images/loginRightIcon.svg'
import '../../assets/scss/home/topbar.scss'
import { nav_menus_unlogined, nav_menus_logined } from '../../utils/public'
import { FiMenu, FiLogOut, FiEdit } from 'react-icons/fi'
import { LoginStatusContext } from '../../context/LoginStatusContext'

const Topbar = () => {
  const { logout, loginWithRedirect } = useAuth0()
  const { loginStatus, setLoginStatus, setToken, user, setLogoClicked } =
    useContext(LoginStatusContext)
  const [bgBlack, setBgBlack] = useState(false)

  const handleLoginout = () => {
    setLoginStatus(false)
    setToken(false)
    localStorage.setItem('token', '')
    logout()
  }

  const handleNavClick = (item) => {
    if (item.logo_clicked === undefined) return
    setLogoClicked(item.logo_clicked)
  }

  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setBgBlack(true)
    } else {
      setBgBlack(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <nav
      className={`navbar navbar-expand-xl navbar-light fixed-top + ${
        bgBlack ? 'bg--black' : ''
      }
    `}
    >
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          <img
            src={logoImgage}
            alt="Logo"
            onClick={() => {
              setLogoClicked(true)
            }}
          />
        </Link>
        <div
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="icon">
            <FiMenu />
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-xl-0">
            {(!loginStatus ? nav_menus_unlogined : nav_menus_logined).map(
              (item) =>
                item.is_react_router ? (
                  <NavLink
                    // to={item?.logo_clicked ? false : item.href}
                    to={item.href}
                    onClick={handleNavClick(item)}
                    className={(isActive) =>
                      'nav-link' + (!isActive ? ' unselected' : '')
                    }
                    key={item.name}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <li className="nav-item" key={item.name}>
                    <a
                      className="nav-link"
                      href={item.href}
                      target={item.is_new_target ? '_blank' : null}
                      rel="noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                )
            )}
          </ul>
          <div className="d-flex buttons">
            {!loginStatus ? (
              <>
                {/* <Link to="/login"> */}
                <button
                  type="button"
                  onClick={loginWithRedirect}
                  className="btn btn-outline-primary topbar--btn btn--login"
                >
                  Login
                </button>
                {/* </Link> */}
                {/* <Link to="/signup"> */}
                <button
                  onClick={loginWithRedirect}
                  type="button"
                  className="btn btn-primary topbar--btn"
                >
                  Sign Up
                </button>
                {/* </Link> */}
              </>
            ) : (
              <div
                className="login--container"
                data-bs-toggle="collapse"
                data-bs-target="#collapse_conent"
              >
                <div className="login--container__image--wapper">
                  <img src={user.picture} alt="user" />
                </div>
                <span className="login--container__user--name bb_16_thin">
                  {user.nickname}
                </span>
                <div className="login--container__toggole--button">
                  <img alt="login Right Icon" src={loginRightIconImage} />
                </div>
                <div
                  id="collapse_conent"
                  className="collapse login--container__collapse--content"
                >
                  <div className="submenu--wrapper">
                    <FiLogOut />
                    <p className="bb_16_thin logout" onClick={handleLoginout}>
                      Sign Out
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
