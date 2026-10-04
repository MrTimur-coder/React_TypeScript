import styled from "@emotion/styled";

interface BgColor {
   $setBgColor: boolean | string;
}

export const CardWrapper = styled.div<BgColor>`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 360px;
  max-height: fit-content;
  border: 1px solid black;
  border-radius: 6px;
  padding: 30px;
  color: black;
  background-color: ${({$setBgColor}) => {return $setBgColor ? $setBgColor : "blue"}};
  gap: 30px;
`;

export const CardTitle = styled.h2`
`