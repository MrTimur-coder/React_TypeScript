import styled from "@emotion/styled";

const PageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(3, 35, 68);
`;
const Paragraph = styled.p`
  margin: 20px;
  margin-bottom: 0;
  font-size: 30px;
  font-weight: bold;
  color: red;
  cursor: pointer;
  transition: .3s;

  &:hover {
    color: rgba(141, 0, 0, 1);
  }
`;

export { PageWrapper, Paragraph };
