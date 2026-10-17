import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import WallpaperWeather from "assets/Weather_Bg.jpg";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${WallpaperWeather}) center / cover no-repeat;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  padding: 30px 40px;
  backdrop-filter: blur(12px);
  color: #fff;
  
  @media (max-width: 500px) {
    padding: 25px;
  }
`;
export const Title = styled.h2`
  cursor: pointer;
  font-size: 35px;

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
  @media (max-width: 500px) {
    gap: 20px;
  }
`;
export const HeaderLink = styled(NavLink)`
  color: #fff;
  font-size: 24px;
  font-weight: normal;
  text-decoration: none;

  &.active {
    font-weight: bold;
    /* text-decoration: underline; */
    border-bottom: 3px solid white;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  
  @media (max-width: 500px) {
    padding: 0px;
  }
`;
