import styled from "@emotion/styled";

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 590px;
  max-width: 100%;
  min-height: 450px;
  max-height: fit-content;
  border: 1px solid #000000;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
  gap: 30px;
`;

export const Title = styled.p`
  margin: 0;
  color: #000000;
  font-size: 24px;
  font-weight: normal;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SuccessMessage = styled.p`
  margin: 0;
  color: green;
  font-size: 18px;
  text-align: center;
`;