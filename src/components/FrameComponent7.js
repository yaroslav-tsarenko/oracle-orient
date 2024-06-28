import HeaderDesktop from "./HeaderDesktop";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`header-desktop-wrapper ${className}`}>
      <HeaderDesktop
        tickerTop="0"
        tickerPosition="sticky"
        tickerAlignSelf="unset"
        tickerFlex="1"
      />
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
