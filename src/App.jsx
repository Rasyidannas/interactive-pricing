import { useState } from "react";
import "./App.css";
import FormSubs from "./components/FormSubs/FormSubs";
import Popup from "./components/Popup/Popup";
import Card from "./components/UI/Cards";

function App() {
  const [isViews, setIsViews] = useState(0);

  const closeHandler = () => {
    setIsViews(0);
  };

  return (
    <>
      <Card className={isViews <= 0 ? "show" : "hidden"}>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>

        <FormSubs onViewData={setIsViews} />
      </Card>

      <Popup onViewers={isViews} onClick={closeHandler} className={isViews > 0 ? "show" : "hidden"}/>
    </>
  );
}

export default App;
