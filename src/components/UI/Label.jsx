const Label = (props) => (
  <label
    className={`label ${props.className}`}
    htmlFor={props.htmlFor}
    onClick={props.onClick}
  >
    {props.children}
  </label>
);

export default Label;
