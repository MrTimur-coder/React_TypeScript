import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 35px;
`;

export const Companies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const CompanyLinks = styled(NavLink)`
  width: 250px;
  background-color: #33333333;
  padding: 20px;
  border-radius: 10px;
`;

export const CompanyAmazon = styled.img`
  width: 100%;
`;
export const CompanySpotify = styled.img`
  width: 90%;
`;
export const CompanyNetflix = styled.img`
  width: 100%;
`;
