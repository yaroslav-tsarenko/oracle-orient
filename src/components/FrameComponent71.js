import ProductCards from "./ProductCards";
import PropTypes from "prop-types";
import "./FrameComponent71.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`popular-products-group ${className}`}>
      <h1 className="popular-products1">Popular Products</h1>
      <div className="product-grid1">
        <ProductCards image5="/image-5@2x.png" propHeight="336px" />
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

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
