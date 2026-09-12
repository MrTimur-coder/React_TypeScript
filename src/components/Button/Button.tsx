import "./styles.css";

import { type ButtonProps } from "./types";

function Button({button_info, type = "button", onClick}: ButtonProps) {
  return <button onClick={onClick} className="button_component" type={type}>{button_info}</button>;
}

export default Button;
