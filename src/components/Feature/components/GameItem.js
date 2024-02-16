import '../../../assets/scss/home/gameItem.scss'

const GameItem = ({
  image,
  headingText,
  developerName,
  description,
  gener,
  developmentStatus,
  platform,
  href,
}) => {
  return (
    <div className="game--container">
      <div className="game--container__imgwrapper">
        <img src={image} alt="game image" />
      </div>

      <div className="game--container__contentwrapper">
        <h4>{headingText}</h4>
        <p className="game--container__contentwrapper--creator">
          Developed by {developerName}
        </p>
        <p className="game--container__contentwrapper--description">
          {description}
        </p>
        <div className="row">
          {/* <div className="col-12 col-md-6">
            <h5 className="mt-3 title-text">gener</h5>
            <p className="bb_16_thin">{gener}</p>
          </div> */}
          <div className="col-12 col-md-6">
            <h5 className="mt-3 title-text">developer</h5>
            <p className="bb_16_thin">{developerName}</p>
          </div>
          <div className="col-12 col-md-6">
            <h5 className="mt-3 title-text">development status</h5>
            <p className="bb_16_thin">{developmentStatus}</p>
          </div>
          {/* <div className="col-12 col-md-6">
            <h5 className="mt-3 title-text">platfrom</h5>
            <p className="bb_16_thin">{platform}</p>
          </div> */}
          <div className="col-12 button--container">
            {href ? (
              <a href={href} target={'_blank'}>
                <button type="button" className="btn btn-primary">
                  <span className="bb_18">VISIT WEBSITE</span>
                </button>
              </a>
            ) : (
              <button type="button" className="btn btn-primary">
                <span className="bb_18">VISIT WEBSITE</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameItem
