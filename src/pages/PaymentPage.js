import ContactAndCarholder from "../components/ContactAndCarholder";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <div className="page">
        <div className="frame-parent">
          <img className="frame-child" alt="" src="/frame-1000006877@2x.png" />
          <div className="footer-note">
            <div className="info">
              <div className="powered-by">{`Powered by `}</div>
              <img
                className="payment-icons"
                loading="lazy"
                alt=""
                src="/payment-icons@2x.png"
              />
            </div>
            <img
              className="footer-note-child"
              loading="lazy"
              alt=""
              src="/vector-341.svg"
            />
            <div className="legal">Legal</div>
            <div className="refunds">Refunds</div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-item" />
        <ContactAndCarholder />
      </div>
    </div>
  );
};

export default PaymentPage;
