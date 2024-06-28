import PropTypes from "prop-types";
import "./FooterLinks.css";

const FooterLinks = ({
  className = "",
  exploreExclusiveGiftsFrom,
  brandLogoItems,
  brandLogoItems1,
  brandLogoItems5,
  brandLogoItems6,
  brandLogoItems7,
  brandLogoItems8,
  brandLogoItems9,
}) => {
  return (
    <section className={`footer-links ${className}`}>
      <div className="explore-exclusive-gifts-from-t-wrapper">
        <h1 className="explore-exclusive-gifts">{exploreExclusiveGiftsFrom}</h1>
      </div>
      <div className="have-a-question-view-our-faqs-wrapper">
        <div className="have-a-question-container">
          <span>{`Have a question? `}</span>
          <b className="view-our-faqs">View our FAQs</b>
        </div>
      </div>
      <div className="brand-logos">
        <img
          className="brand-logo-items"
          loading="lazy"
          alt=""
          src={brandLogoItems}
        />
        <img
          className="brand-logo-items1"
          loading="lazy"
          alt=""
          src={brandLogoItems1}
        />
        <div className="brand-logo-items2">
          <div className="brand-logo-item">
            <div className="brand-image-placeholder" />
            <img className="image-12-icon" alt="" src="/image-12@2x.png" />
          </div>
        </div>
        <img
          className="brand-logo-items3"
          loading="lazy"
          alt=""
          src="/frame-1410065677@2x.png"
        />
        <img
          className="brand-logo-items4"
          alt=""
          src="/frame-1410065678-1@2x.png"
        />
        <img
          className="brand-logo-items5"
          alt=""
          src="/frame-1410065679-1@2x.png"
        />
        <img
          className="brand-logo-items6"
          loading="lazy"
          alt=""
          src={brandLogoItems5}
        />
        <img className="brand-logo-items7" alt="" src={brandLogoItems6} />
        <img className="brand-logo-items8" alt="" src={brandLogoItems7} />
        <img className="brand-logo-items9" alt="" src={brandLogoItems8} />
        <img className="brand-logo-items10" alt="" src={brandLogoItems9} />
        <img
          className="brand-logo-items11"
          alt=""
          src="/frame-1410065677-2@2x.png"
        />
      </div>
    </section>
  );
};

FooterLinks.propTypes = {
  className: PropTypes.string,
  exploreExclusiveGiftsFrom: PropTypes.string,
  brandLogoItems: PropTypes.string,
  brandLogoItems1: PropTypes.string,
  brandLogoItems5: PropTypes.string,
  brandLogoItems6: PropTypes.string,
  brandLogoItems7: PropTypes.string,
  brandLogoItems8: PropTypes.string,
  brandLogoItems9: PropTypes.string,
};

export default FooterLinks;
