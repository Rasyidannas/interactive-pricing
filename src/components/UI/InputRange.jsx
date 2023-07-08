import Input from "./Input";
import "./InputRange.css";

const InputRange = (props) => {
  const rangeProgress = Math.ceil((props.value/props.max) * 100) 

  return <div className={`range-wrapper ${props.className}`}>
    <Input
      type={props.type}
      name={props.name}
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.value}
      id={props.id}
      className="range-input"
      onChange={props.onChange}
    />
    <div className="range-noprogress"></div>
    <div className="range-progress" style={{width: `${rangeProgress}%`}}></div>
  </div>
};

export default InputRange;
