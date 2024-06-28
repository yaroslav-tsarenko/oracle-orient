import HeaderDesktop from "../components/HeaderDesktop";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FooterLinks from "../components/FooterLinks";
import FooterDesktop from "../components/FooterDesktop";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderDesktop />
      <section className="hero-banner">
        <h1 className="oracleorient-your-gateway">
          OracleOrient: Your Gateway to Thoughtful Gifting
        </h1>
        <div className="search-container">
          <div className="form-field">
            <div className="search">Search</div>
            <img className="icon" alt="" src="/icon-2.svg" />
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <FrameComponent6 />
      <FooterLinks
        exploreExclusiveGiftsFrom="Explore Exclusive Gifts from Top Brands"
        brandLogoItems="/frame-1410065678@2x.png"
        brandLogoItems1="/frame-1410065679@2x.png"
        brandLogoItems5="/frame-1410065680@2x.png"
        brandLogoItems6="/frame-1410065677-1@2x.png"
        brandLogoItems7="/frame-1410065678-2@2x.png"
        brandLogoItems8="/frame-1410065679-2@2x.png"
        brandLogoItems9="/frame-1410065680-1@2x.png"
      />
      <FooterDesktop />
    </div>
  );
};

export default HomePage;
