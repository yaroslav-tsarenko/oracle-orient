import TestimonialContent from "./TestimonialContent";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`happy-customers-are-our-true-w-parent ${className}`}>
      <h1 className="happy-customers-are-container">
        <p className="happy-customers">
          <span>HAPPY CUSTOMERS</span>
          <span className="span">{` `}</span>
        </p>
        <p className="are-our-true">ARE OUR TRUE WEALTH</p>
      </h1>
      <div className="testimonial-slides">
        <TestimonialContent
          customerImages="/customer-images@2x.png"
          almaRai="Alma Rai"
        />
        <TestimonialContent
          customerImages="/customer-images@2x.png"
          almaRai="Alma Rai"
        />
        <TestimonialContent
          customerImages="/ellipse-213-2@2x.png"
          almaRai="Gagan Lama"
        />
        <TestimonialContent
          customerImages="/ellipse-213-3@2x.png"
          almaRai="Ganga Rai"
        />
      </div>
      <div className="testimonial-slides1">
        <TestimonialContent
          customerImages="/ellipse-213-2@2x.png"
          almaRai="Gagan Lama"
        />
        <TestimonialContent
          customerImages="/ellipse-213-5@2x.png"
          almaRai="Asta Giri"
        />
        <TestimonialContent
          customerImages="/ellipse-213-6@2x.png"
          almaRai="Alma Rai"
        />
        <TestimonialContent
          customerImages="/ellipse-213-7@2x.png"
          almaRai="Ganga Rai"
        />
        <TestimonialContent
          customerImages="/ellipse-213-2@2x.png"
          almaRai="Gagan Lama"
        />
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
