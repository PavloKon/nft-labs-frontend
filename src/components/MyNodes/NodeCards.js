const NodeCards = ({ userStats }) => {
  return (
    <section className="nodecards">
      <div className="wrapper">
        <div className="card1">
          <div className="card-title">$LL BALANCE</div>
          <div className="card-value">
            {userStats?.activeNodeCount ? userStats?.activeNodeCount : 0}
          </div>
        </div>
        <div className="card2">
          <div className="card-title">
            <div>YOUR ACTIVE NODES</div>
            <div className="goal--progress__percent">
              {userStats?.goalProgressPercent ? userStats?.licenseCount : 0}
              &nbsp;%
            </div>
          </div>
          <div className="card-value">
            {userStats?.totalNodeCount ? userStats?.totalNodeCount : 0}
          </div>
        </div>
        <div className="card-group">
          <div className="card31">
            <div className="card-title">YOUR LOOK NODES LISCENSES</div>
            <div className="card-value">
              {userStats?.licenseCount ? userStats?.licenseCount : 0}
            </div>
          </div>
          <div className="card32">
            <div className="card-title">PROGRESS TOWARDS TODAY’S GOAL</div>
            <div className="card-value">
              {userStats?.goalProgressPercent
                ? userStats?.goalProgressPercent
                : 0}
            </div>
          </div>
        </div>
        <div className="card4">
          <div className="card-title">YOUR REFERAL CODE</div>
          <div className="card-value">
            {userStats?.referralCode ? userStats?.referralCode : 0}
          </div>
        </div>
      </div>
      {/* <div className="addItemBtn">
        <button type="button" className="addBtn bb_16_medium">
          ADDITEM
        </button>
      </div> */}
    </section>
  )
}

export default NodeCards
