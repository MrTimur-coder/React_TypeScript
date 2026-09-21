import styled from "@emotion/styled";

interface BgColor {
   $setBgColor: boolean | string;
}

export const CardWrapper = styled.div<BgColor>`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 300px;
  max-height: fit-content;
  border: 1px solid black;
  border-radius: 6px;
  padding: 30px;
  color: black;
  background-color: ${({$setBgColor}) => {return $setBgColor ? $setBgColor : "blue"}};
  gap: 30px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  align-self: center;
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 24px;
  font-weight: 500;
  gap: 15px;
`;

export const InfoTitle = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

export const InfoParagraph = styled.p`
  color: red;
`;
