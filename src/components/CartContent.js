import ItemRow from "./ItemRow";
import PropTypes from "prop-types";
import "./CartContent.css";

const CartContent = ({ className = "" }) => {
  return (
    <section className={`cart-content ${className}`}>
      <div className="items-container-parent">
        <div className="items-container">
          <div className="item-row1">
            <div className="header6">
              <div className="header-child" />
              <div className="product-column">
                <b className="product">Product</b>
              </div>
              <div className="price-quantity">
                <b className="price">Price</b>
                <b className="quantity">Quantity</b>
              </div>
              <b className="total">Total</b>
            </div>
            <div className="item-details">
              <img
                className="image-10-icon1"
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
              <div className="item-title">
                <b className="best-buy-card1">Best Buy Card</b>
                <b className="discount-20-off">Discount: 20% OFF</b>
              </div>
              <div className="item-actions">
                <div className="quantity1">
                  <b className="quantity-placeholder">$120.00</b>
                  <b className="credits1">12 Credits</b>
                </div>
                <div className="increase-quantity">
                  <div className="plus-button1">
                    <div className="quantity-buttons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <b className="increase-placeholder">3</b>
                    <input className="add-icon-row" type="checkbox" />
                  </div>
                  <div className="time-period">
                    <b className="hourly1">Hourly</b>
                    <div className="hourly-placeholder-wrapper">
                      <img
                        className="hourly-placeholder-icon"
                        alt=""
                        src="/hourly-placeholder.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <b className="item-separator">$120.00</b>
            </div>
          </div>
          <ItemRow />
          <ItemRow />
          <div className="cart-actions">
            <div className="cart-actions-child" />
            <div className="action-buttons">
              <button className="button12">
                <img className="tag-icon10" alt="" src="/tag-icon.svg" />
                <b className="button13">Go Back</b>
                <img className="tag-icon11" alt="" src="/tag-icon.svg" />
              </button>
              <button className="button14">
                <img className="tag-icon12" alt="" src="/tag-icon.svg" />
                <b className="button15">Checkout</b>
                <img className="tag-icon13" alt="" src="/tag-icon.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="checkout-details4">
          <div className="checkout-header">
            <div className="header7">
              <b className="checkout-details5">Checkout Details</b>
            </div>
          </div>
          <div className="total-values-wrapper">
            <div className="total-values">
              <b className="cart-subtotal1">Cart Subtotal</b>
              <b className="value-separator">$360.00</b>
            </div>
          </div>
          <div className="subtotal-total">
            <div className="tax-labels">
              <div className="charge-labels">
                <b className="shipping-handling1">{`Shipping & Handling`}</b>
                <b className="other-taxes1">Other Taxes</b>
              </div>
              <div className="tax-names">
                <b className="b6">$0.00</b>
                <b className="b7">$0.00</b>
              </div>
            </div>
          </div>
          <div className="checkout-header1">
            <div className="checkout-header-child" />
          </div>
          <div className="checkout-details6">
            <div className="grand-total-group">
              <b className="grand-total1">Grand Total</b>
              <b className="b8">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartContent.propTypes = {
  className: PropTypes.string,
};

export default CartContent;
