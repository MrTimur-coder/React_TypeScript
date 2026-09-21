import { useState } from "react";

import "./styles.css";
import Button from "components/Button/Button";
import Feedback from "components/Feedback/Feedback";
import Input from "components/Input/Input";
import Card from "components/Card/Card";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);
  const onLike = (): void => {
    setLike((preValue: number): number => {
      return preValue + 1;
    });
  };
  const onDislike = (): void => {
    setDislike((preValue: number): number => {
      return preValue + 1;
    });
  };
  const onReset = (): void => {
    setLike(0);
    setDislike(0);
  };
  return (
    <div className="wrapper">
      <Feedback
        like={like}
        dislike={dislike}
        onDislike={onDislike}
        onLike={onLike}
        onReset={onReset}
      />
      <div className="input_wrapper">
        <Input
          name="enter_feedback"
          id="enter_feedback"
          label="Enter Your Feedback"
          placeholder="Enter your questions/suggestions/concerns ..."
        />
      </div>
      <div className="btn_wrapper">
        <Button button_info="Send" />
      </div>

      <div className="card_wrapper">
        <Card
          firstName={"Tom"}
          lastName={"Holland"}
          avatar={
            "https://th.bing.com/th/id/OIP.pq7VmcRSll9y5mvOU6tczAHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          }
          hobby={"Dancing"}
          job={"Actor"}
          setBgColor={"lightblue"}
        />
        <Card
          firstName={"Miguel"}
          lastName={"O’Hara"}
          avatar={
            "https://th.bing.com/th/id/OIP.IfBfY6kWCwWNelnLk72_uAHaHa?w=183&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          }
          hobby={"Swimming"}
          job={"Actor"}
          setBgColor={"White"}
          />
        <Card
          setBgColor={"lightgreen"}
          firstName={"Tobey"}
          lastName={"Maguire"}
          avatar={
            "https://www.bing.com/th/id/OIP.WhDu-PmdeERNILL5w9P9jgHaEK?w=206&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
          }
          hobby={"Acting"}
          job={"Actor"}
        />
      </div>
    </div>
  );
}
export default Homework_07;
