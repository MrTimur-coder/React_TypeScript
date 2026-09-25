import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;
  padding: 30px;
`;

export const PageWrapperForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;
  padding: 30px;
`;

export const ButtonControl = styled.div`
  min-width: 150px;
  margin-top: 37.5px;
`;

export const InputControl = styled.div`
  width: 500px;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 300px;
  max-height: fit-content;
  border: 1px solid black;
  border-radius: 6px;
  padding: 30px;
  color: black;
  gap: 30px;
`;
