import "./Button.css";

const Button = (props) => (
  <button
    type={props.type}
    className={`btn ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
