import { ButtonComponent } from "./styles";

import { type ButtonProps } from "./types";

function Button({
  button_info,
  type = "button",
  onClick,
  isRed = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      onClick={onClick}
      type={type}
      $isRed={isRed}
      disabled={disabled}
    >
      {button_info}
    </ButtonComponent>
  );
}

export default Button;
