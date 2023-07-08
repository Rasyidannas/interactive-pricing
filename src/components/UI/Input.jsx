const Input = (props) => (
  <input
    type={props.type}
    name={props.name}
    min={props.min}
    max={props.max}
    step={props.step}
    value={props.value}
    id={props.id}
    className={props.className}
    onChange={props.onChange}
    checked={props.checked}
  ></input>
);

export default Input;
