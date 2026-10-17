import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles";
import { ROUTE } from "components/pages/WeatherApp/WeatherAppLayout/routes";
import WeatherAppLayout from "components/pages/WeatherApp/WeatherAppLayout/WeatherAppLayout";

import Weather from "components/pages/WeatherApp/components/Weather/Weather";
import WeatherHome from "components/pages/WeatherApp/components/Home/Home";
import { SavedCityProvider } from "components/pages/WeatherApp/WeatherAppLayout/SavedCityProvider";

function WeatherApp() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <SavedCityProvider>
        <WeatherAppLayout>
          <Routes>
            <Route path={ROUTE.HOME} element={<WeatherHome />} />
            <Route path={ROUTE.WEATHERS} element={<Weather />} />
          </Routes>
        </WeatherAppLayout>
      </SavedCityProvider>
    </BrowserRouter>
  );
}
export default WeatherApp;
