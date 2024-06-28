import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`frame-parent1 ${className}`}>
      <img
        className="frame-inner"
        loading="lazy"
        alt=""
        src="/frame-1000007122@2x.png"
      />
      <div className="creative-content">
        <div className="creative-call-to-action">
          <div className="call-to-action-container">
            <h1 className="gifts-for-your-container">
              <span>Gifts for your Friends all around</span>
              <span className="the-world"> the world.</span>
            </h1>
            <div className="let-your-creativity">
              Let your creativity roam free, unencumbered by limitations, as you
              explore the vast expanse of possibility. Embrace the liberation of
              your ideas, for in their unrestricted flight lies the true essence
              of creativity.
            </div>
          </div>
          <button className="button9">
            <div className="get-started1">Learn More</div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
