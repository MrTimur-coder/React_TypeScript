import { ErrorText, InputStyling, InputWrapper, Label } from "./styles";
import { type InputProps } from "./types";

function Input({ name, type = "text", placeholder, label, id, disabled = false, error = undefined, onChange, value }: InputProps) {
  return (
    <InputWrapper disabled={disabled} $error={error}>
      <Label htmlFor={id} disabled={disabled} $error={error}>{label}</Label>
      <InputStyling id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} $error={error} onChange={onChange} value={value}/>
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}

export default Input;