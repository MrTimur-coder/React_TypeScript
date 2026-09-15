import "./styles.css";
import Button from "components/Button/Button";
import Feedback from "components/Feedback/Feedback";
import Input from "components/Input/Input";

function Homework_07() {
  return (
    <div className="wrapper">
      <Feedback />
      <div className="input_wrapper"><Input name="enter_feedback" id="enter_feedback" label="Enter Your Feedback" placeholder="Enter your questions/suggestions/concerns ..."/></div>
      <div className="btn_wrapper"><Button button_info="Send"/></div>
    </div>
  );
}
export default Homework_07;
