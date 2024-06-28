import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CategoryItems.css";

const CategoryItems = ({
  className = "",
  clothesGiftCards,
  elevateTheirStyleWithOurF,
  propBackgroundImage,
  propGap,
}) => {
  const categoryItemsStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      gap: propGap,
    };
  }, [propBackgroundImage, propGap]);

  return (
    <div className={`category-items ${className}`} style={categoryItemsStyle}>
      <div className="clothes-gift-cards-parent">
        <h1 className="clothes-gift-cards">{clothesGiftCards}</h1>
        <div className="elevate-their-style">{elevateTheirStyleWithOurF}</div>
      </div>
      <button className="learn-more-parent">
        <div className="learn-more">LEARN MORE</div>
        <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
      </button>
      <img
        className="arrow-circle-right-icon"
        alt=""
        src="/arrowcircleright.svg"
      />
    </div>
  );
};

CategoryItems.propTypes = {
  className: PropTypes.string,
  clothesGiftCards: PropTypes.string,
  elevateTheirStyleWithOurF: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propGap: PropTypes.any,
};

export default CategoryItems;
