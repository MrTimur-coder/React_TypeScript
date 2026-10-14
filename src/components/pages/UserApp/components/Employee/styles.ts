import styled from "@emotion/styled";

export const EmployeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

// НОВОЕ: обёртка для карточек, чтобы они стояли в два столбца
export const CardsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 800px;
  max-width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  max-width: 100%;
  border: 1px solid #000000;
  padding: 30px 60px;
  border-radius: 4px;
  background-color: white;
  gap: 20px;
`;

// ИЗМЕНЕНО: column, чтобы подпись была над значением (как в макете)
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoTitle = styled.span`
  color: #555555;
  font-size: 16px;
  font-weight: normal;
`;

export const InfoText = styled.p`
  margin: 0;
  min-height: 24px;
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  word-break: break-word;
`;

// НОВОЕ: ширина для кнопки "Remove All Employees"
export const RemoveAllWrapper = styled.div`
  width: 100px;
  max-width: 50%;
`;