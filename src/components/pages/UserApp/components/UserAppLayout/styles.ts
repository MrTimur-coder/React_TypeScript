import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  padding: 30px 40px;
  background: #faf9ff;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 50%;
  height: 130px;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  width: auto;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;
export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  color: black;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 70px;
  background-color: rgba(0, 10, 66, 0.9);
`;
