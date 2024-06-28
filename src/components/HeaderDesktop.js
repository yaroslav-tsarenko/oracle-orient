import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HeaderDesktop.css";

const HeaderDesktop = ({
  className = "",
  tickerTop,
  tickerPosition,
  tickerAlignSelf,
  tickerFlex,
}) => {
  const headerDesktopStyle = useMemo(() => {
    return {
      top: tickerTop,
      position: tickerPosition,
      alignSelf: tickerAlignSelf,
      flex: tickerFlex,
    };
  }, [tickerTop, tickerPosition, tickerAlignSelf, tickerFlex]);

  return (
    <section
      className={`header-desktop ${className}`}
      style={headerDesktopStyle}
    >
      <div className="ticker">
        <div className="get-100-off-container">
          <span>{`Get $100 off on purchases over $30. `}</span>
          <span className="add-voucher">Add Voucher</span>
        </div>
      </div>
      <header className="header4">
        <div className="logo">
          <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
          <h1 className="cryptonovax">Oracle Orient</h1>
        </div>
        <div className="navigation">
          <div className="nav-header-link-block">
            <a className="shop">Shop</a>
            <img className="icon5" alt="" src="/icon.svg" />
          </div>
          <div className="nav-header-link-block1">
            <a className="shop1">Our Story</a>
            <img className="icon6" alt="" src="/icon.svg" />
          </div>
          <div className="nav-header-link-block2">
            <a className="shop2">{`Subscribe & Save`}</a>
            <img className="icon7" alt="" src="/icon1.svg" />
          </div>
          <div className="nav-header-link-block3">
            <a className="shop3">Contact</a>
            <img className="icon8" alt="" src="/icon1.svg" />
          </div>
          <div className="nav-header-link-block4">
            <a className="shop4">Download</a>
            <img className="icon9" alt="" src="/icon1.svg" />
          </div>
          <button className="button6">
            <img className="tag-icon6" alt="" src="/tag-icon.svg" />
            <div className="button7">Sign in</div>
            <img className="tag-icon7" alt="" src="/tag-icon.svg" />
          </button>
          <img className="navigation-child" alt="" src="/frame-9.svg" />
        </div>
      </header>
    </section>
  );
};

HeaderDesktop.propTypes = {
  className: PropTypes.string,

  /** Style props */
  tickerTop: PropTypes.any,
  tickerPosition: PropTypes.any,
  tickerAlignSelf: PropTypes.any,
  tickerFlex: PropTypes.any,
};

export default HeaderDesktop;
