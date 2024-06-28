import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="sign-in-wrapper">
        <div className="sign-in">
          <div className="sign-in-container">
            <div className="sign-in-title">
              <h1 className="sign-in1">Sign in</h1>
              <div className="sign-in-to">
                Sign in to your account to see products catered to you
              </div>
            </div>
            <form className="credentials">
              <div className="input-labels">
                <div className="username">Username</div>
                <img
                  className="input-fields-icon"
                  alt=""
                  src="/input-fields.svg"
                />
              </div>
              <div className="input-labels1">
                <div className="password">Password</div>
                <img
                  className="input-labels-child"
                  alt=""
                  src="/frame-153-1.svg"
                />
              </div>
              <Button
                className="button1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#273524",
                  borderRadius: "20px",
                  "&:hover": { background: "#273524" },
                }}
              >
                Sign In
              </Button>
            </form>
            <div className="or-sign-in">or, sign in with</div>
            <div className="social-logins">
              <img
                className="social-login-buttons"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-login-buttons1"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-login-buttons2"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="divider-icon"
        loading="lazy"
        alt=""
        src="/rectangle-49@2x.png"
      />
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
