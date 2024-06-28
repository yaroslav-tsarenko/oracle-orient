import FrameComponent from "../components/FrameComponent";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent yourCart="Checkout" />
      <section className="checkoutpage-inner">
        <div className="frame-parent">
          <form className="frame-group">
            <div className="checkout-parent">
              <h2 className="checkout">Checkout</h2>
              <div className="header">
                <b className="billing-details">Billing Details</b>
              </div>
              <div className="form-field-block">
                <div className="row-1">
                  <div className="block-1">
                    <b className="first-name">First Name</b>
                  </div>
                  <div className="block-2">
                    <b className="last-name">Last Name</b>
                  </div>
                </div>
                <div className="row-2">
                  <div className="block-11">
                    <b className="company-name">Company Name</b>
                  </div>
                  <div className="block-21">
                    <b className="country">Country</b>
                    <img className="icon1" alt="" src="/icon-21.svg" />
                  </div>
                </div>
                <div className="row-3">
                  <div className="block-12">
                    <b className="street-address">Street Address</b>
                  </div>
                </div>
                <div className="block-22">
                  <input
                    className="apartment-suite"
                    placeholder="Apartment / Suite / Unit / etc. (Optional)"
                    type="text"
                  />
                </div>
                <div className="row-4">
                  <div className="block-13">
                    <b className="town-city">Town / City</b>
                  </div>
                </div>
                <div className="block-23">
                  <input
                    className="email-address"
                    placeholder="Email Address"
                    type="text"
                  />
                </div>
                <div className="row-5">
                  <div className="block-14">
                    <input className="zip" placeholder="ZIP" type="text" />
                  </div>
                  <div className="block-24">
                    <input className="phone" placeholder="Phone" type="text" />
                  </div>
                </div>
              </div>
              <div className="address-separator" />
              <div className="details-header">
                <button className="button">
                  <img className="tag-icon" alt="" src="/tag-icon.svg" />
                  <div className="button1">Back</div>
                  <img className="tag-icon1" alt="" src="/tag-icon.svg" />
                </button>
                <button className="button2">
                  <img className="tag-icon2" alt="" src="/tag-icon.svg" />
                  <div className="button3">Checkout</div>
                  <img className="tag-icon3" alt="" src="/tag-icon.svg" />
                </button>
              </div>
            </div>
            <div className="checkout-details-parent">
              <div className="checkout-details">
                <div className="header1">
                  <b className="checkout-details1">Checkout Details</b>
                </div>
                <div className="cart-subtotal-parent">
                  <b className="cart-subtotal">Cart Subtotal</b>
                  <b className="order-details-values">$360.00</b>
                </div>
                <div className="shipping-handling-parent">
                  <b className="shipping-handling">{`Shipping & Handling`}</b>
                  <b className="b">$0.00</b>
                </div>
                <div className="other-taxes-parent">
                  <b className="other-taxes">Other Taxes</b>
                  <b className="b1">$0.00</b>
                </div>
                <div className="order-details-separator" />
                <div className="grand-total-parent">
                  <b className="grand-total">Grand Total</b>
                  <b className="b2">$360.00</b>
                </div>
              </div>
              <div className="transfer-options">
                <div className="header2">
                  <b className="transfer-options1">Transfer Options</b>
                </div>
                <div className="checkout-details2">
                  <div className="logos-block">
                    <div className="block-15">
                      <div className="logo-block">
                        <img
                          className="image-1-icon"
                          loading="lazy"
                          alt=""
                          src="/image-11@2x.png"
                        />
                      </div>
                      <b className="bank-transfer">
                        <p className="bank">Bank</p>
                        <p className="transfer">Transfer</p>
                      </b>
                    </div>
                    <div className="block-25">
                      <div className="logo-block1">
                        <img
                          className="image-2-icon"
                          loading="lazy"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <b className="google-pay">
                        <p className="google">Google</p>
                        <p className="pay">Pay</p>
                      </b>
                    </div>
                  </div>
                  <div className="payment-options">
                    <div className="block-3">
                      <div className="logo-block2">
                        <img
                          className="image-3-icon"
                          loading="lazy"
                          alt=""
                          src="/image-31@2x.png"
                        />
                      </div>
                      <b className="apple-pay">
                        <p className="apple">Apple</p>
                        <p className="pay1">Pay</p>
                      </b>
                    </div>
                    <div className="block-4">
                      <div className="logo-block3">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-41@2x.png"
                        />
                      </div>
                      <b className="paypal">PayPal</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="checkout1">
            <div className="header3">
              <b className="checkout2">Checkout</b>
            </div>
            <div className="checkout-details3">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <button className="button4">
                <img className="tag-icon4" alt="" src="/tag-icon1.svg" />
                <div className="button5">Checkout</div>
                <img className="tag-icon5" alt="" src="/tag-icon1.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterDesktop1 />
    </div>
  );
};

export default CheckoutPage;
