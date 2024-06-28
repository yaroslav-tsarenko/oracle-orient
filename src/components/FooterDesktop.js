import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer-content">
        <div className="footer-top">
          <div className="logo1">
            <img className="logo-icon1" alt="" src="/logo-1@2x.png" />
            <h1 className="cryptonovax1">Oracle Orient</h1>
          </div>
          <div className="explore-a-seamless">
            Explore a seamless blend of Gift Card services at Oracle Orient
          </div>
        </div>
        <div className="footer-navigation">
          <div className="product-links">
            <h3 className="products">Products</h3>
            <div className="travel-cards">Travel Cards</div>
            <div className="gaming-cards">Gaming Cards</div>
            <div className="festival-cards">Festival Cards</div>
            <div className="food-cards">Food Cards</div>
            <div className="clothes-cards">Clothes Cards</div>
          </div>
          <div className="footer-links-container">
            <h3 className="get-to-know">Get To Know Us</h3>
            <div className="about-us">About Us</div>
            <div className="contact-us3">Contact Us</div>
            <div className="agent-contact">Agent Contact</div>
            <div className="services">Services</div>
          </div>
          <div className="footer-links-container1">
            <h3 className="legal-pages">Legal Pages</h3>
            <div className="terms">Terms</div>
            <div className="conditions">Conditions</div>
            <div className="refund-policy">Refund Policy</div>
            <div className="cancellation-policy">Cancellation Policy</div>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <div className="shopsphere-all-rights">
          © 2023 ShopSphere. All Rights Reserved.
        </div>
        <div className="legal-menu" />
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop;
