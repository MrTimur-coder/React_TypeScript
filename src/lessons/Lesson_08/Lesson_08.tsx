import Button from "components/Button/Button";
import { ButtonControl, PageWrapper, Paragraph } from "./styles";

function Lesson_08() {
  return (
    <PageWrapper>
      <Paragraph>Lesson 8</Paragraph>
      <ButtonControl>
        <Button button_info="Simple Button" />
      </ButtonControl>
      <ButtonControl>
        <Button button_info="Delete Button" isRed={true}/>
      </ButtonControl>
      <ButtonControl>
        <Button button_info="Disabled Button" disabled={true}/>
      </ButtonControl>
    </PageWrapper>
  );
}

export default Lesson_08;
