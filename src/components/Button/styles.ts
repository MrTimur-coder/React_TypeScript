import styled from "@emotion/styled";

interface ButtonComponentStyles {
  $isRed: boolean;
}

const generateButtonColor = (isRed: boolean, disabled: boolean | undefined) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "#ff6868ff";
    } else {
      return "rgb(72, 72, 241)";
    }
  }
};
const generateButtonColorOnhover = (
  isRed: boolean,
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "rgb(207, 24, 24)";
    } else {
      return "rgb(22, 22, 210)";
    }
  }
};
export const ButtonComponent = styled.button<ButtonComponentStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 0;
  height: 70px;
  width: 100%;
  /* background-color: ${({ $isRed }) =>
    $isRed ? "#ff6868ff" : "rgb(82, 82, 241)"}; */
  background-color: ${({ $isRed, disabled }) =>
    generateButtonColor($isRed, disabled)};
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ $isRed, disabled }) =>
      generateButtonColorOnhover($isRed, disabled)};
  }
`;
