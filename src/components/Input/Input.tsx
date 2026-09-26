import { ErrorText, InputStyling, InputWrapper, Label, RequiredAsterisk } from "./styles";
import { type InputProps } from "./types";

function Input({ name, type = "text", placeholder, label, id, disabled = false, title, error = undefined, onChange, value, asterisk }: InputProps) {
  return (
    <InputWrapper disabled={disabled} $error={error}>
      <Label htmlFor={id} disabled={disabled} $error={error} title={asterisk ? "This field is required!" : ""}>{label}<RequiredAsterisk>{asterisk}</RequiredAsterisk></Label>
      <InputStyling id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} $error={error} onChange={onChange} value={value}/>
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}

export default Input;