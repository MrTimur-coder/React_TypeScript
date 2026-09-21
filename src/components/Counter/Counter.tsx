import Button from "components/Button/Button";

import {type CounterProps} from './types'
import { ButtonControl, Count, CounterWrapper } from "./styles";

function Counter({count, onPlus, onMinus}: CounterProps) {
  return (
    <CounterWrapper className="counter_wrapper">
      <ButtonControl className="button_control">
        <Button button_info="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl className="button_control">
        <Button button_info="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;