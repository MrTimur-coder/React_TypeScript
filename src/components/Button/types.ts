export interface ButtonProps{
  button_info: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}
