import { useContext } from "react";
import {
  MessageList,
  MessageOrderedList,
  MessageTitle,
  MessageWrapper,
} from "./styles";
import { BlogContext } from "../BlogManagement/BlogManagement";
import { v4 } from "uuid";

function Message() {
  const { message } = useContext(BlogContext);

  console.log(message);
  const messageList = Array.isArray(message)
    ? message.map((value: any, index: number) => {
        return (
          <MessageList key={v4()}>
            {index + 1}. {value}
          </MessageList>
        );
      })
    : [];
  return (
    <MessageWrapper>
      <MessageTitle>Message Component</MessageTitle>
      {messageList.length > 0 ? (
        <MessageOrderedList>{messageList}</MessageOrderedList>
      ) : (
        <p>No messages found</p>
      )}
    </MessageWrapper>
  );
}

export default Message;
