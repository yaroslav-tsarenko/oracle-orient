import PropTypes from "prop-types";
import "./TestimonialContent.css";

const TestimonialContent = ({ className = "", customerImages, almaRai }) => {
  return (
    <div className={`testimonial-content ${className}`}>
      <blockquote className="outstanding-service-verizon">
        “Outstanding service! Verizon TopUp saved the day when I ran out of data
        mid-streaming. Highly recommend!”
      </blockquote>
      <div className="customer-details">
        <img className="customer-images-icon" alt="" src={customerImages} />
        <div className="customer-info">
          <div className="customer-name">
            <h3 className="alma-rai">{almaRai}</h3>
            <div className="customer">Customer</div>
          </div>
          <div className="rating">
            <img className="rating-child" alt="" src="/star-1.svg" />
            <img className="rating-item" alt="" src="/star-1.svg" />
            <img className="rating-inner" alt="" src="/star-1.svg" />
            <img className="star-icon" alt="" src="/star-1.svg" />
            <img className="rating-child1" alt="" src="/star-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialContent.propTypes = {
  className: PropTypes.string,
  customerImages: PropTypes.string,
  almaRai: PropTypes.string,
};

export default TestimonialContent;
