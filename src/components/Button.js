// Button component below some prototypes are written just for learning purpose

import Proptypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.prototypes = {
  text: Proptypes.string,
  color: Proptypes.string,
};

export default Button;
