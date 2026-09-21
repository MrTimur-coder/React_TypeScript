import Button from "components/Button/Button";
import { CardWrapper, Avatar, CardInfo, InfoTitle, InfoParagraph } from "./styles";

import type { CardProps } from "./types";

function Card({firstName, lastName, job, hobby, avatar, setBgColor = false}: CardProps) {
  return (
    <CardWrapper $setBgColor={setBgColor}>
      <Avatar src={avatar} alt="User Avatar" />
      <CardInfo>
        <InfoTitle>Fullname: </InfoTitle>
        <InfoParagraph>{`${firstName} ${lastName}`}</InfoParagraph>
      </CardInfo>
      <CardInfo>
        <InfoTitle> Job: </InfoTitle>
        <InfoParagraph>{job}</InfoParagraph>
      </CardInfo>
      <CardInfo>
        <InfoTitle>Hobby: </InfoTitle>
        <InfoParagraph>{hobby}</InfoParagraph>
      </CardInfo>
      <Button button_info={"Read more ->"}/>
    </CardWrapper>
  );
}
export default Card;
