import { ToastContainer } from "react-toastify";
import { ROUTE } from "./routes";
import {
  LayoutWrapper,
  Header,
  Title,
  NavigationContainer,
  HeaderLink,
  Main,
} from "./styles";

import { type LayoutProps, } from "./types";
import { useNavigate } from "react-router-dom";
import { SavedCityProvider } from "./SavedCityProvider";


function WeatherAppLayout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(ROUTE.HOME);
  };
  return (
    <SavedCityProvider>
      <LayoutWrapper>
        <Header>
          <Title onClick={goToHome}>WeatherToday</Title>
          <NavigationContainer>
            <HeaderLink to={ROUTE.HOME}>Home </HeaderLink>
            <HeaderLink to={ROUTE.WEATHERS}>Weather </HeaderLink>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
          toastClassName="weather-toast"
        />
      </LayoutWrapper>
    </SavedCityProvider>
  );
}

export default WeatherAppLayout;
