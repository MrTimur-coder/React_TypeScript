import styled from "@emotion/styled";

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
`;

export const MessageTitle = styled.h3``;

export const MessageOrderedList = styled.ol`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  list-style-type: decimal !important;
  list-style-position: inside;
  color: black;
  padding: 20px;
  margin: 10px;
  width: 100%;
`;

export const MessageList = styled.li`
  display: list-item;
  font-size: 18px;
  text-align: left;
  padding: 10px;
  color: black;
`;
