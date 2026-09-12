import Button from "components/Button/Button";
import "./styles.css";

import {type CounterProps} from './types'

function Counter({count, onPlus, onMinus}: CounterProps) {
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button button_info="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button button_info="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;