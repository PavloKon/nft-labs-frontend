import { Link } from "react-router-dom";
import gameItemImage from "../../assets/images/gameItem1.png";
const GameCard = () => {
  return (
    <section className="card-container">
      <div className="download--node__container row justify-content-center justify-md-left">
        <div className="image--container col-12 col-md-5">
          <img src={gameItemImage} />
        </div>
        <div className="content--container col-12 col-md-7 text-center text-md-start">
          <h4>download Node</h4>
          <p className="bb_18_regular">Visit The Download Page</p>
          <p className="bb_18_light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
            turpis pretium, tincidunt mauris non, tempor magna. Donec dignissim
            est vel arcu viverra faucibus.
          </p>
          <button type="button" className="btn-primary btn-download mb-3">
            <p className="bb_18 btn--download__text">Download</p>
          </button>
        </div>
      </div>

      <div className="download--node__container row justify-content-center justify-md-left">
        <div className="content--container col-12 col-md-7 text-center text-md-start">
          <h4>GET LICENSE</h4>
          <p className="bb_18_regular">Get The Licenses</p>
          <p className="bb_18_light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
            turpis pretium, tincidunt mauris non, tempor magna. Donec dignissim
            est vel arcu viverra faucibus.
          </p>
          <Link to="/purchase-details">
            <button type="button" className="btn-primary btn-download mb-3">
              <p className="bb_18 btn--download__text">Purchase Licenses</p>
            </button>
          </Link>
        </div>
        <div className="image--container col-12 col-md-5">
          <img src={gameItemImage} />
        </div>
      </div>
    </section>
  );
};

export default GameCard;
