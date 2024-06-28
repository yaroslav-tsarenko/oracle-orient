import HeaderDesktop from "./HeaderDesktop";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <HeaderDesktop />
      <div className="greeting-wrapper">
        <div className="greeting">
          <div className="welcome-darnell-wrapper">
            <h1 className="welcome-darnell">Welcome, Darnell</h1>
          </div>
          <b className="your-personal-dashboard">Your Personal Dashboard</b>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
