import "./Popup.css";
import illustrationSuccess from "../../assets/image-pop-up.svg";
import Button from "../UI/Button";
import Card from "../UI/Cards";

const Popup = (props) => {
  return (
    <Card className={`popup-wrapper ${props.className}`}>
      <img src={illustrationSuccess} />
      <div className="popup-info">
        Purchase confirmation for {props.onViewers}k views
      </div>
      <div>
        <h1>Thank You!</h1>
        <p>
          We deeply appreciate your successful payment, supporting our mission
          and ensuring our shared success. Thank you for your valued
          contribution!
        </p>
      </div>

      <Button className="btn-primary" onClick={props.onClick}>
        Close
      </Button>
    </Card>
  );
};

export default Popup;
