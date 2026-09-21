import Button from "components/Button/Button";
import type { FeedbackProps } from "./types";
import { ButtonWrapper, Dislike, FeedbackTitle, FeedbackWrapper, Like, ResetButton, Status } from "./styles";

function Feedback({like, dislike, onLike, onDislike, onReset}: FeedbackProps){
  return (
    <FeedbackWrapper>
      <FeedbackTitle>Feedback</FeedbackTitle>
      <Like>
        <ButtonWrapper><Button button_info={"Like"} onClick={onLike}/></ButtonWrapper>
        <Status>{like}</Status>
      </Like>
      <Dislike>
        <ButtonWrapper><Button button_info={"Dislike"} onClick={onDislike} /></ButtonWrapper>
        <Status className="status">{dislike}</Status>
      </Dislike>
      <ResetButton>
        <Button button_info={"Reset"} onClick={onReset}/>
      </ResetButton>
    </FeedbackWrapper>
  );
}

export default Feedback;
