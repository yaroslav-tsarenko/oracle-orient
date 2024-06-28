import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductCards.css";

const ProductCards = ({ className = "", image5, propHeight }) => {
  const productCardsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`product-cards ${className}`} style={productCardsStyle}>
      <img className="image-5-icon" loading="lazy" alt="" src={image5} />
      <div className="card-details">
        <b className="most-popular-giftcards">Most Popular Giftcards</b>
        <h3 className="upto-10-off">Upto 10% OFF</h3>
      </div>
    </div>
  );
};

ProductCards.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default ProductCards;
