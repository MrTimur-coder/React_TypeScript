import styled from "@emotion/styled";

interface InputSt {
  disabled: boolean;
  $error: undefined | string;
}

const inputColorGenerator = (disabled: boolean | undefined, error: string | undefined) => {
  if (disabled) {
    return "gray";
  } else if (error) {
    return "red";
  } else {
    return "black";
  }
};

const InputWrapper = styled.div<InputSt>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const Label = styled.label<InputSt>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const InputStyling = styled.input<InputSt>`
  outline: none;
  border: 1px solid ${({ disabled, $error }) => inputColorGenerator(disabled, $error)};
  border-radius: 10px;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  font-size: 15px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "normal")};
`;
const ErrorText = styled.div`
  font-size: 16px;
  color: #ff6868ff;
`;
export const RequiredAsterisk = styled.span`
  color: red;
`;

export { InputWrapper, Label, InputStyling, ErrorText};
