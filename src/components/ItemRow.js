import PropTypes from "prop-types";
import "./ItemRow.css";

const ItemRow = ({ className = "" }) => {
  return (
    <div className={`item-row ${className}`}>
      <div className="row-separator" />
      <div className="image-10-parent">
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <div className="best-buy-card-parent">
          <b className="best-buy-card">Best Buy Card</b>
          <b className="worth-usd-400">Worth USD $400</b>
        </div>
        <div className="frame-div">
          <div className="parent">
            <b className="b3">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="frame-parent2">
            <div className="plus-button-parent">
              <div className="plus-button">
                <img className="icon-plus" alt="" src="/iconplus.svg" />
              </div>
              <b className="b4">3</b>
              <input className="frame-input" type="checkbox" />
            </div>
            <div className="hourly-parent">
              <b className="hourly">Hourly</b>
              <div className="rate-value">
                <img
                  className="rate-value-child"
                  alt=""
                  src="/hourly-placeholder.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <b className="b5">$120.00</b>
      </div>
    </div>
  );
};

ItemRow.propTypes = {
  className: PropTypes.string,
};

export default ItemRow;
