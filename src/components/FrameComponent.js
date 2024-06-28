import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", yourCart }) => {
  return (
    <section className={`header-desktop-parent ${className}`}>
      <div className="header-desktop1">
        <div className="ticker1">
          <div className="get-100-off-container1">
            <span>{`Get $100 off on purchases over $30. `}</span>
            <span className="add-voucher1">Add Voucher</span>
          </div>
        </div>
        <header className="header5">
          <div className="logo2">
            <img
              className="logo-icon2"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
            <h2 className="cryptonovax2">Oracle Orient</h2>
          </div>
          <div className="navigation1">
            <div className="nav-header-link-block5">
              <a className="shop5">Shop</a>
              <img className="icon13" alt="" src="/icon.svg" />
            </div>
            <div className="nav-header-link-block6">
              <a className="shop6">Our Story</a>
              <img className="icon14" alt="" src="/icon.svg" />
            </div>
            <div className="nav-header-link-block7">
              <a className="shop7">{`Subscribe & Save`}</a>
              <img className="icon15" alt="" src="/icon1.svg" />
            </div>
            <div className="nav-header-link-block8">
              <a className="shop8">Contact</a>
              <img className="icon16" alt="" src="/icon1.svg" />
            </div>
            <div className="nav-header-link-block9">
              <a className="shop9">Download</a>
              <img className="icon17" alt="" src="/icon1.svg" />
            </div>
            <button className="button10">
              <img className="tag-icon8" alt="" src="/tag-icon.svg" />
              <div className="button11">Sign in</div>
              <img className="tag-icon9" alt="" src="/tag-icon.svg" />
            </button>
            <img
              className="navigation-item"
              loading="lazy"
              alt=""
              src="/frame-9.svg"
            />
          </div>
        </header>
      </div>
      <div className="frame-wrapper">
        <div className="title-content-parent">
          <div className="title-content">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default FrameComponent;
