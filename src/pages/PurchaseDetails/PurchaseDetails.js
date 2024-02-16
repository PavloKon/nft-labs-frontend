import React, { useContext } from 'react'
import Topbar from '../../components/Topbar'
import Footer from '../../components/Footer'
import PurchaseDetailsContent from '../../components/PurchaseDetailsContent'
import '../../assets/scss/purchaseDetails/purchaseDetails.scss'
import { LoginStatusContext } from '../../context/LoginStatusContext'

const PurchaseDetails = () => {
  const { token, loginStatus } = useContext(LoginStatusContext)
  console.log('token', token)
  console.log('loginStatus', loginStatus)
  return (
    <div className="purchase-detail-page">
      <Topbar />
      <PurchaseDetailsContent />
      <Footer />
    </div>
  )
}

export default PurchaseDetails
