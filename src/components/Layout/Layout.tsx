import { useNavigate } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
} from "./styles";
import type { LayoutProps } from "./types";
import { NAVIGATION_MENU_ROUTES, ROUTES } from "components/constants/routes";

function Layout({children}: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(ROUTES.HOME)
  }

  const routeKeys = Object.keys(NAVIGATION_MENU_ROUTES);
  const routeValues = Object.values(NAVIGATION_MENU_ROUTES);

  const headerLink = routeValues.map((value, index) => {
    return <HeaderLink style={getActiveStyles} to={value} key={index}>{routeKeys[index]}</HeaderLink>
  })

  const footerLink = routeValues.map((value, index) => {
    return <FooterLink to={value} key={index}>{routeKeys[index]}</FooterLink>
  })

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>
          {headerLink}
          {/* <HeaderLink style={getActiveStyles} to="/">Home</HeaderLink>
          <HeaderLink style={getActiveStyles} to="/clients">Clients</HeaderLink>
          <HeaderLink style={getActiveStyles} to="/contactUs">Contact Us</HeaderLink>
          <HeaderLink style={getActiveStyles} to="/about">About</HeaderLink>
          <HeaderLink style={getActiveStyles} to="/login">Login</HeaderLink> */}
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>
        <FooterNavigation>
          {footerLink}
          {/* <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink> */}
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
