import PropositionCards from "./PropositionCards";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="we-are-different-in-every-way-parent">
        <h1 className="we-are-different-container">
          <span>{`WE ARE `}</span>
          <span className="different">DIFFERENT</span>
          <span> IN EVERY WAY</span>
        </h1>
        <button className="button8">
          <div className="get-started">Get Started</div>
        </button>
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/frame-1000006902@2x.png"
        />
      </div>
      <div className="value-propositions">
        <PropositionCards
          emptyPropositionIcon="/frame-1000006905.svg"
          sustainabilityInCheck="Sustainability in check"
          weLoveNurturingNatureOneG="We love nurturing nature, one garden at a time, so that you can enjoy the beautiful landscape of our garden even longer"
        />
        <PropositionCards
          emptyPropositionIcon="/frame-1000006908.svg"
          sustainabilityInCheck="Creativity unleashed"
          weLoveNurturingNatureOneG="We make sure to only giv you our innovative designs that stand out to make sure that your garden is not like the others"
        />
        <PropositionCards
          emptyPropositionIcon="/frame-1000006907.svg"
          sustainabilityInCheck="Passion in every work"
          weLoveNurturingNatureOneG="We are deeply passionate about creating beautiful, sustainable green landscapes for our clients"
        />
        <PropositionCards
          emptyPropositionIcon="/frame-1000006906.svg"
          sustainabilityInCheck="Collaboration on top"
          weLoveNurturingNatureOneG="We make your dream design come true by combining your ideas with our 10+ years of card design expertise"
        />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
