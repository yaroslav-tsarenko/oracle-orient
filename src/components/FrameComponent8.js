import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`main-content-wrapper ${className}`}>
      <form className="main-content">
        <div className="image-10-group">
          <img
            className="image-10-icon2"
            loading="lazy"
            alt=""
            src="/image-101@2x.png"
          />
          <div className="product-info">
            <div className="info-headers">
              <div className="about-this-gift">About this Gift Voucher</div>
              <img className="info-icons" alt="" src="/info-icons.svg" />
            </div>
            <div className="info-headers1">
              <div className="how-to-use">How to Use</div>
              <img
                className="info-headers-child"
                alt=""
                src="/info-icons.svg"
              />
            </div>
            <div className="info-headers2">
              <div className="brands-included-in">
                Brands Included In this Voucher
              </div>
              <img className="info-headers-item" alt="" src="/info-icons.svg" />
            </div>
            <div className="info-headers3">
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <img
                className="info-headers-inner"
                alt=""
                src="/info-icons.svg"
              />
            </div>
            <div className="product-description">
              <b className="note">Note:</b>
              <b className="discover-the-perfect">{`Discover the perfect blend of style and utility with our Shoes & Wallet Gift Card. Whether it's stepping out in fashionable footwear or staying organized with a sleek wallet, this versatile gift card offers endless possibilities. Give the gift of choice and let your loved ones indulge in their favorite brands and styles.
`}</b>
            </div>
          </div>
        </div>
        <div className="purchase-options">
          <div className="recipient-choice">
            <h1 className="best-buy-gift">Best Buy Gift Card</h1>
            <div className="introducing-the-shoes">{`Introducing the Shoes & Wallet Gift Card from WishDeck - the perfect pairing for those who appreciate both style and practicality. With this versatile eGift card, recipients can explore a wide array of footwear options to step out in fashion-forward confidence, while also browsing through a selection of sleek wallets to complement their everyday essentials.`}</div>
          </div>
          <div className="i-would-like-to-parent">
            <div className="i-would-like">I would Like to:</div>
            <div className="selection-options">
              <button className="selection-buttons">
                <div className="gift-a-friend">Gift a Friend</div>
              </button>
              <button className="selection-buttons1">
                <div className="gift-myself">Gift Myself</div>
              </button>
            </div>
          </div>
          <div className="gift-card-value">
            <div className="gift-card-worth">Gift Card Worth:</div>
            <div className="value-options">
              <button className="value-buttons">
                <div className="usd-200">USD $200</div>
              </button>
              <button className="value-buttons1">
                <div className="usd-500">USD $500</div>
              </button>
              <button className="value-buttons2">
                <div className="usd-700">USD $700</div>
              </button>
              <button className="value-buttons3">
                <div className="usd-1000">USD $1000</div>
              </button>
            </div>
          </div>
          <div className="quantity-selection">
            <div className="select-your-quantity">Select your Quantity</div>
            <div className="quantity-options">
              <div className="rectangle-parent">
                <div className="rectangle-div" />
                <img
                  className="add-icon"
                  loading="lazy"
                  alt=""
                  src="/add.svg"
                />
              </div>
              <div className="empty-quantity-label-wrapper">
                <div className="empty-quantity-label">4</div>
              </div>
              <div className="rectangle-group">
                <div className="frame-child1" />
                <div className="add-button-icon-wrapper">
                  <img
                    className="add-button-icon"
                    loading="lazy"
                    alt=""
                    src="/vector-600.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="button16">
            <img className="tag-icon14" alt="" src="/tag-icon.svg" />
            <div className="button17">Add to Cart</div>
            <img className="tag-icon15" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </form>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
