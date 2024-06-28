import ProductCards from "./ProductCards";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`popular-products-parent ${className}`}>
      <h1 className="popular-products">Popular Products</h1>
      <div className="product-filters">
        <div className="filter-options1">
          <div className="sort-21">
            <div className="find1">Find</div>
            <div className="form-field4">
              <div className="form-label3">Search</div>
              <img className="icon10" alt="" src="/icon-3.svg" />
            </div>
          </div>
          <div className="sort-11">
            <div className="sort-by1">{`Sort by `}</div>
            <div className="form-field5">
              <div className="form-label4">Latest</div>
              <img className="icon11" alt="" src="/icon-4.svg" />
            </div>
          </div>
          <div className="sort-31">
            <div className="explore-our-gift2">Explore Our Gift Cards</div>
            <div className="form-field6">
              <div className="form-label5">Select by Brands</div>
              <img className="icon12" alt="" src="/icon-4.svg" />
            </div>
          </div>
        </div>
        <div className="clear-filter">
          <img className="clear-filter-child" alt="" src="/group-8796.svg" />
          <div className="clear-all-filters1">Clear All Filters</div>
        </div>
      </div>
      <div className="product-grid">
        <ProductCards image5="/image-5@2x.png" />
        <ProductCards image5="/image-6@2x.png" propHeight="336px" />
        <ProductCards image5="/image-3@2x.png" propHeight="336px" />
        <ProductCards image5="/image-7@2x.png" propHeight="336px" />
        <ProductCards image5="/image-4@2x.png" propHeight="336px" />
        <ProductCards image5="/image-8@2x.png" propHeight="336px" />
        <ProductCards image5="/image-9@2x.png" propHeight="336px" />
        <ProductCards image5="/image-1@2x.png" propHeight="326px" />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
