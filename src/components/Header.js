// Header Component at the last commented out section is how to implement CSS in js(just for learning) something I was experimenting while building this project

import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onShow, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" ? (
        <Button
          color={showAdd ? "##b8860b" : "green"}
          text={showAdd ? "Close" : "Add Task"}
          onClick={onShow}
        />
      ) : (
        ""
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "Black",
// };

export default Header;
