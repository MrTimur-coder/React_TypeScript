import styled from "@emotion/styled";

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 700px;
  border: 2px solid black;
  background-color: aliceblue;
  padding: 30px 20px;
`;

export const FeedbackTitle = styled.h1`
  font-size: 34px;
  margin: 20px;
  color: black;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Dislike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 170px;
`;

export const Status = styled.div`
  border-radius: 12px;
  border: 2px solid blue;
  padding: 20px 30px;
  font-size: 30px;
  font-weight: 600;
  color: white;
  background-color: aqua;
`;

export const ResetButton = styled.div`
  width: 280px;
`;
