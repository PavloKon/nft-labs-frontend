import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Topbar from '../../components/Topbar'
import AccountEdit from '../../components/AccountEdit'
import Footer from '../../components/Footer'
import '../../assets/scss/accountEdit/accountEdit.scss'

const AccountDetails = () => {
  const { user } = useAuth0()
  return (
    <div className="account-edit-page">
      <Topbar loginStatus={true} />
      <AccountEdit user={user} />
      <Footer />
    </div>
  )
}

export default AccountDetails
