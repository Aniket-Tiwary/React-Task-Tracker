import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add Task" />
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
