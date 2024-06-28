import CategoryItems from "./CategoryItems";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`explore-popular-categories-parent ${className}`}>
      <h1 className="explore-popular-categories">Explore Popular Categories</h1>
      <div className="category-cards">
        <div className="category-items1">
          <div className="category-content">
            <h1 className="travel-gift-cards">Travel Gift Cards</h1>
            <div className="explore-the-world">
              Explore the world with our travel gift cards. From weekend
              getaways to dream vacations, give the gift of adventure and
              unforgettable experiences.
            </div>
          </div>
          <div className="learn-more1">
            <input
              className="learn-more2"
              placeholder="LEARN MORE"
              type="text"
            />
            <img className="arrow-right-icon1" alt="" src="/arrowright.svg" />
          </div>
          <img
            className="arrow-circle-right-icon1"
            loading="lazy"
            alt=""
            src="/arrowcircleright.svg"
          />
        </div>
        <div className="category-items2">
          <div className="food-gift-cards-parent">
            <h1 className="food-gift-cards">Food Gift Cards</h1>
            <div className="indulge-in-culinary">
              Indulge in culinary delights with our food gift cards. From cozy
              cafes to gourmet restaurants, treat your loved ones to delicious
              meals and memorable dining experiences.
            </div>
          </div>
          <button className="learn-more-group">
            <div className="learn-more3">LEARN MORE</div>
            <img className="arrow-right-icon2" alt="" src="/arrowright.svg" />
          </button>
          <img
            className="arrow-circle-right-icon2"
            alt=""
            src="/arrowcircleright.svg"
          />
        </div>
        <CategoryItems
          clothesGiftCards="Clothes Gift Cards"
          elevateTheirStyleWithOurF="Elevate their style with our fashion-forward gift cards. From chic apparel to trendy accessories, give the gift of effortless elegance and personal expression."
        />
        <CategoryItems
          clothesGiftCards="Games Gift Cards"
          elevateTheirStyleWithOurF="Unleash gaming excitement with our game gift cards. From epic adventures to multiplayer showdowns, give the gift of endless entertainment and fun."
          propBackgroundImage="url('/category-items3@3x.png')"
          propGap="48px"
        />
        <CategoryItems
          clothesGiftCards="Festivals Gift Cards"
          elevateTheirStyleWithOurF="Celebrate special moments with our festival gift cards. Whether it's a birthday bash or a holiday gathering, add a touch of joy and excitement to every occasion."
          propBackgroundImage="url('/category-items4@3x.png')"
          propGap="28px"
        />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
