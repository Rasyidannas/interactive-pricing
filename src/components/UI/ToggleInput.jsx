import { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import "./ToggleInput.css";

const ToggleInput = (props) => {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyHandler = () => {
    // this is set true because it will comparison with isYearly (false === true)
    setIsYearly(true);
  };

  const yearlyHandler = () => {
    setIsYearly(false);
  };

  const toggleHandler = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);

    //this is will be store data in props parent and opposite of useState isYearly
    if(isYearly){
        props.onYearlyBilling(false)
    }else{
        props.onYearlyBilling(true)
    }
  };

//   console.log("toggle input", isYearly);
  return (
    <div className="toggle-wrapper">
      <Label htmlFor="toggle-input" onClick={monthlyHandler}>
        Monthly Biling
      </Label>
      <Input
        type="checkbox"
        className="toggle-input"
        id="toggle-input"
        checked={isYearly}
        onChange={toggleHandler}
      />
      <div className="toggle-custom" onClick={toggleHandler}>
        <span className="toggle-handle"></span>
      </div>
      <Label htmlFor="toggle-input" onClick={yearlyHandler}>
        Yearly Biling<span className="toggle-hint">{props.discountYearly * 100}% <span>discount</span></span>
      </Label>
    </div>
  );
};

export default ToggleInput;