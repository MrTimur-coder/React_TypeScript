import {
  LayoutWrapper,
  Header,
  Main,
  Logo,
  LogoImg,
  NavigationContainer,
  HeaderLink

} from "./styles";
import MbrandLogo from "assets/MbrandLogo.png"
import { type LayoutProps } from "./types";

function UserAppLayout({ children }: LayoutProps){
  return (
    <LayoutWrapper>
      <Header > 
        <Logo>
        <LogoImg src={MbrandLogo} alt="Logo" />
        </Logo>
        <NavigationContainer>
          <HeaderLink to="/">Create Employee </HeaderLink>
           <HeaderLink to="/employees">Employees </HeaderLink>     
        </NavigationContainer>

      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default UserAppLayout;

