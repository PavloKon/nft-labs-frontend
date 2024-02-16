import { useState, useContext } from 'react'
import axios from 'axios'
import { FiEdit2 } from 'react-icons/fi'
import { useAuth0 } from '@auth0/auth0-react'

import { LoginStatusContext } from '../../context/LoginStatusContext'
import '../../assets/scss/accountEdit/accountEdit.scss'

const AccountEdit = () => {
  const { user } = useAuth0()

  const { token } = useContext(LoginStatusContext)

  console.log('userddddddddddddddddddddddddddd', user)
  console.log('tokenddddddddddddddddddddddddddd', token)

  const [formInfo, setFormInfo] = useState({
    fullname: user?.nickname,
    emailAddress: user?.email ? user?.email : '',
    password: '',
  })

  console.log('formInfo', formInfo)
  const handleSubmit = (formInfo) => {
    // axios
    //   .post(process.env.REACT_APP_baseUrl + '/users', formInfo, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       'content-type': 'application/json',
    //     },
    //   })
    //   .then((response) => {
    //     console.log('ddddddddddddddddd', response.data)
    //   })
    //   .catch()
    axios
      .post(
        process.env.REACT_APP_baseUrl + '/users',
        {
          emailAddress: formInfo.emailAddress,
          password: formInfo.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log('/users  response', response.data)
      })
      .catch()
  }
  const handleOnChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="account-eidt-container ">
      <section className="detail-section">
        <section className="detail-wrapper">
          <div className="title bb_34">ACCOUNT DETAILS</div>
          <div className="wrapper">
            <div className="input-group px-1 px-xxl-0">
              <div className="input-title bb_18_regular">FULL NAME</div>
              <div className="input-box">
                <input
                  name="fullname"
                  className="input-edit bb_16_thin"
                  value={formInfo.fullname}
                  onChange={handleOnChange}
                />
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
            </div>
            <div className="input-group px-1 px-xxl-0">
              <div className="input-title bb_18_regular">Email Address</div>
              <div className="input-box">
                <input
                  name="emailAddress"
                  type="text"
                  className="input-edit bb_16_thin"
                  value={formInfo.emailAddress}
                  onChange={handleOnChange}
                />
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
            </div>
            <div className="input-group px-1 px-xxl-0">
              <div className="input-title bb_18_regular">Password</div>
              <div className="input-box">
                <input
                  name="password"
                  type="password"
                  className="input-edit bb_16_thin"
                  value={formInfo.password}
                  onChange={handleOnChange}
                />
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
              <div className="passwordTip bb_16_thin">
                MUST CONTAIN AT LEAST 4 CHARACTERS, 1 SYMBOL, AND 1 NUMBERIC
              </div>
            </div>
            <button className="signup px-1 px-xxl-0" onClick={handleSubmit}>
              Change
            </button>
          </div>
          <div className="notify-offline">
            <input className="notify-check" type="checkbox" />
            <div className="notification-text">
              Notify me when my node is offline.
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default AccountEdit
