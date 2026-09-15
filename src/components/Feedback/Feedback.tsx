import { useState } from "react";

import Button from "components/Button/Button";
import "./styles.css";

function Feedback() {
  const [ like, setLike ] = useState<number>(0);
  const [ dislike, setDislike ] = useState<number>(0);
  const onLike = ():void => {
    setLike((preValue: number): number => {
      return preValue + 1;
    });
  };
  const onDislike = ():void => {
    setDislike((preValue: number): number => {
      return preValue + 1;
    });
  };
  const onReset=():void=>{
   setLike(0);
   setDislike(0);
  }

  return (
    <div className="feedback_wrapper">
      <h1 className="feedback_title">Feedback</h1>
      <div className="like">
        <div className="likeBtn"><Button button_info={"Like"} onClick={onLike}/></div>
        <div className="status">{like}</div>
      </div>
      <div className="dislike">
        <div className="dislikeBtn"><Button button_info={"Dislike"} onClick={onDislike} /></div>
        <div className="status">{dislike}</div>
      </div>
      <div className="reset_btn">
        <Button button_info={"Reset"} onClick={onReset}/>
      </div>
    </div>
  );
}

export default Feedback;
