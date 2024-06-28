import HeaderDesktop from "../components/HeaderDesktop";
import ProductCards from "../components/ProductCards";
import FooterLinks from "../components/FooterLinks";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <HeaderDesktop
        tickerTop="unset"
        tickerPosition="unset"
        tickerAlignSelf="stretch"
        tickerFlex="unset"
      />
      <section className="frame-container">
        <img className="frame-child" alt="" src="/group-5@2x.png" />
        <h1 className="explore-our-gift">Explore Our Gift Cards</h1>
        <div className="gift-cards-description-contain">
          <div className="whether-youre-celebrating">
            Whether you're celebrating a birthday, expressing gratitude, or
            simply spreading joy, our curated selection of eGift cards offers
            something for everyone.
          </div>
        </div>
      </section>
      <section className="filters-container-parent">
        <div className="filters-container">
          <div className="filter-options">
            <div className="sort-2">
              <div className="find">Find</div>
              <div className="form-field1">
                <div className="form-label">Search</div>
                <img className="icon2" alt="" src="/icon-3.svg" />
              </div>
            </div>
            <div className="sort-1">
              <div className="sort-by">{`Sort by `}</div>
              <div className="form-field2">
                <div className="form-label1">Latest</div>
                <img className="icon3" alt="" src="/icon-4.svg" />
              </div>
            </div>
            <div className="sort-3">
              <div className="explore-our-gift1">Explore Our Gift Cards</div>
              <div className="form-field3">
                <div className="form-label2">Select by Brands</div>
                <img className="icon4" alt="" src="/icon-4.svg" />
              </div>
            </div>
          </div>
          <div className="clear-filter-button-container">
            <img
              className="clear-filter-button-container-child"
              alt=""
              src="/group-8796.svg"
            />
            <div className="clear-all-filters">Clear All Filters</div>
          </div>
        </div>
        <div className="product-card-containers-parent">
          <ProductCards image5="/image-5@2x.png" propHeight="336px" />
          <ProductCards image5="/image-6@2x.png" propHeight="336px" />
          <ProductCards image5="/image-3@2x.png" propHeight="336px" />
          <ProductCards image5="/image-7@2x.png" propHeight="336px" />
          <ProductCards image5="/2@2x.png" propHeight="336px" />
          <ProductCards image5="/1@2x.png" propHeight="336px" />
          <ProductCards image5="/4@2x.png" propHeight="336px" />
          <ProductCards image5="/image-1@2x.png" propHeight="326px" />
          <ProductCards image5="/image-7@2x.png" propHeight="336px" />
          <ProductCards image5="/image-8@2x.png" propHeight="336px" />
          <ProductCards image5="/14@2x.png" propHeight="336px" />
          <ProductCards image5="/image-9@2x.png" propHeight="336px" />
        </div>
      </section>
      <FooterLinks
        exploreExclusiveGiftsFrom="Explore Brands"
        brandLogoItems="/frame-14100656781@2x.png"
        brandLogoItems1="/frame-14100656791@2x.png"
        brandLogoItems5="/frame-14100656801@2x.png"
        brandLogoItems6="/frame-1410065677-11@2x.png"
        brandLogoItems7="/frame-1410065678-21@2x.png"
        brandLogoItems8="/frame-1410065679-21@2x.png"
        brandLogoItems9="/frame-1410065680-11@2x.png"
      />
      <FooterDesktop />
    </div>
  );
};

export default ProductListingPage;
