import {WEATHERAPP_ROUTES} from "../../constants"; 

import {
  LayoutWrapper,
  Header,
  Title,
  Navigation,
  HeaderLink,
  Main,
} from "./styles";


import {type LayoutProps} from "./types"; 

function Layout ({children} : LayoutProps) {
    return (
        <LayoutWrapper>
          <Header>
            <Title>Weather App</Title>
            <Navigation>
              <HeaderLink to={WEATHERAPP_ROUTES.HOME} >
                Home
              </HeaderLink>
              <HeaderLink to={WEATHERAPP_ROUTES.WEATHER}>Weather</HeaderLink>
            </Navigation>
          </Header>
          <Main>{children}</Main>
        </LayoutWrapper>
    )
}

export default Layout; 