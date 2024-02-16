import '../../assets/scss/purchaseDetails/purchaseDetailsContent.scss'
import gameItemImage from '../../assets/images/gameItem1.png'
import { connectWallet } from '../../utils/commonFunc'
import { useEffect, useState } from 'react'

const PurchaseDetailsContent = () => {
  const [walletStatus, setWalletStatus] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  console.log('walletAddress', walletAddress)

  const connectWalletButton = async () => {
    const walletResponse = await connectWallet()
    setWalletStatus(walletResponse.status)
    setWalletAddress(walletResponse.address)

    if (!walletResponse.address) {
      if (walletResponse.status == 'uninstalled') {
        alert('Please install Metamask')
      }
    } else {
      alert('Successfully Connected')
    }
  }

  const disconnectWalletButton = async () => {
    setWalletAddress('')
    setWalletStatus('')
  }

  return (
    <div className="purchase--detaills__container">
      <div className="bb_34">Purchase Details</div>
      <div className="card--container">
        <div className="connect--card">
          <div className="connect--card__left--space"></div>
          <div className="connect--card__content">
            <h4>PURCHASE A NODE LICENSE</h4>
            <p className="bb_18_regular">Develpoed By Look labs</p>
            <p className="bb-20_regular">Look Labs Nodes</p>
            {/* <h5>Transaction ID</h5>
            <p className="bb_16_medium">10234567895622</p> */}
            <div className="connect--card__content--bottom row">
              <div className="col-12 col-md-6 pt-3">
                <h5>Nodes Purchase</h5>
                <p className="bb_16_thin">3,4000/50,000</p>
              </div>
              <div className="col-12 col-md-6 pt-3">
                <h5>Developer</h5>
                <p className="bb_16_thin">Look labs</p>
              </div>
              <div className="col-12 col-md-6 pt-3">
                <h5>Development Status</h5>
                <p className="bb_16_thin">LIVE</p>
              </div>
              <div className="col-12 col-md-6 pt-3">
                <h5>Platform</h5>
                <p className="bb_16_thin">Windows/Mac/Linux</p>
              </div>
              <div className="cost--container">
                <h5>Price</h5>
                <p className="bb_16_medium">$19,000</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-connect-wallet"
            onClick={
              walletAddress ? disconnectWalletButton : connectWalletButton
            }
            disabled={walletAddress ? true : false}
          >
            <div className="bb_16_medium">
              {walletAddress ? (
                <>
                  {/* <span className="wallet--address">
                    {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
                  </span>{' '} */}
                  Purchase Node
                </>
              ) : (
                'Connect wallet'
              )}
            </div>
            {/* <div className="bb_16_medium">Connect wallet</div> */}
          </button>
        </div>
        {/* <div className="purchase--card">
          <div className="cost--container">
            <p className="price-title bb_16_medium">Price</p>
            <p className="bb_16_medium">$19,000</p>
          </div>
          <div className="cost--container">
            <p className="price-title bb_16_medium">Discount</p>
            <p className="bb-20_semi_bold">(-) 2,000</p>
          </div>
          <p className="bb_18_medium">Transaction ID</p>
          <p className="bb_16_medium">10234567895622</p>
          <p className="bb_18_medium">Used Account</p>
          <p className="bb_16_semi_bold">My Bank Savings Account</p>
          <button
            type="button"
            className="purchase--container btn btn-outline-primary  "
          >
            <span className="purchase">PURCHASE</span>
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default PurchaseDetailsContent
