import Button from "../UI/Button";
import Card from "../UI/Cards";
import { useState } from "react";
import InputRange from "../UI/InputRange";
import "./FormSubs.css";
import ToggleInput from "../UI/ToggleInput";
import CheckIcon from "../UI/CheckIcon";
const FormSubs = (props) => {
  //this is for toggleisYearly checked or not checked
  const [toggleIsYearly, setToggleIsYearly] = useState(false);

  //for max range input
  const maxViewers = 200;
  
  // discount in one year
  const discount = .25;

  //for high price
  const [highPrice, setHighPrice] = useState(32);

  //for handler value range input
  const [viewersRange, setViewersRange] = useState(100);
  const viewersRangeInt = +viewersRange;

  const costPerViews = viewersRangeInt * (highPrice / 200);

  //slider range input handler
  const rangeSlideHandler = (event) => {
    setViewersRange(event.target.value);
  };

  //handle toogle yearly billing
  const yearlyHandler = (isYearly) => {
    //this is for toggle input checked
    if (isYearly) {
      setToggleIsYearly(true);

      const yearlyHighPrice = highPrice * 12 * discount;
      setHighPrice(yearlyHighPrice);
    } else {
      //this is for yearly to monthly and range progress up in 32
      setToggleIsYearly(false);
      setHighPrice(32);
    }
  };

  // Handle submit form
  const submitSubsHandler = (event) => {
    event.preventDefault()

    //this for store in app.jsx
    props.onViewData(viewersRange);
  }

  return (
    <Card className="form-subs">
      <form onSubmit={submitSubsHandler}>
        <div className="form-subs__detail">
          <h3>{viewersRange}K PAGEVIEWS</h3>
          <h1>
            ${costPerViews.toFixed(2)}
            <span>/ {toggleIsYearly ? "year" : "month"}</span>
          </h1>
          <InputRange
            type="range"
            min="0"
            max={maxViewers}
            step="1"
            value={viewersRange}
            id="rangeSubs"
            onChange={rangeSlideHandler}
            className="form-subs__range"
          />
        </div>

        <ToggleInput onYearlyBilling={yearlyHandler} discountYearly={discount} />

        <div className="line"></div>

        <div className="form-subs__info">
          <ul>
            <li>
              <span className="icon">
                <CheckIcon />
              </span>
              Unlimited websites
            </li>
            <li>
              <span className="icon">
                <CheckIcon />
              </span>
              100% data ownership
            </li>
            <li>
              <span className="icon">
                <CheckIcon />
              </span>
              Email reports
            </li>
          </ul>
          <Button className="btn-primary">Start my trial</Button>
        </div>
      </form>
    </Card>
  );
};

export default FormSubs;
