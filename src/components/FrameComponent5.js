import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`gift-options-parent ${className}`}>
      <div className="gift-options">
        <div className="gift-cards">
          <h1 className="start-gifting">START GIFTING</h1>
        </div>
        <div className="shop-now">
          <h1 className="giftafriend">#GIFTAFRIEND</h1>
        </div>
        <div className="gift-card">
          <h1 className="giftacard">#GIFTACARD</h1>
        </div>
      </div>
      <div className="gift-options1">
        <div className="contact-us-parent">
          <button className="contact-us">
            <div className="learn-more4">LEARN MORE</div>
            <img className="arrow-right-icon3" alt="" src="/arrowright.svg" />
          </button>
          <div className="contact-us1">
            <input
              className="contact-us2"
              placeholder="CONTACT US"
              type="text"
            />
            <img className="arrow-right-icon4" alt="" src="/arrowright-6.svg" />
          </div>
        </div>
        <h1 className="shop-now1">SHOP NOW</h1>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
