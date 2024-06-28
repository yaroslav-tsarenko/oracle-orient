import PropTypes from "prop-types";
import "./PropositionCards.css";

const PropositionCards = ({
  className = "",
  emptyPropositionIcon,
  sustainabilityInCheck,
  weLoveNurturingNatureOneG,
}) => {
  return (
    <div className={`proposition-cards ${className}`}>
      <div className="proposition-content">
        <img
          className="empty-proposition-icon"
          loading="lazy"
          alt=""
          src={emptyPropositionIcon}
        />
        <h3 className="sustainability-in-check">{sustainabilityInCheck}</h3>
      </div>
      <div className="we-love-nurturing">{weLoveNurturingNatureOneG}</div>
    </div>
  );
};

PropositionCards.propTypes = {
  className: PropTypes.string,
  emptyPropositionIcon: PropTypes.string,
  sustainabilityInCheck: PropTypes.string,
  weLoveNurturingNatureOneG: PropTypes.string,
};

export default PropositionCards;
