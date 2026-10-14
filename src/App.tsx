import { Route, Routes, BrowserRouter } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import { ROUTES } from "components/constants/routes";
import { ROUTE } from "components/pages/WeatherApp/WeatherAppLayout/routes";
import WeatherAppLayout from "components/pages/WeatherApp/WeatherAppLayout/WeatherAppLayout";

// Pages
import Home from "components/pages/EmployeeApp/Home/Home";
import Clients from "components/pages/Clients/Clients";
import About from "components/pages/EmployeeApp/About/About";
import ContactUs from "components/ContactUsForm/ContactUsForm";
import LogIn from "components/pages/EmployeeApp/LogIn/LogIn";
import Amazon from "components/pages/Clients/Amazon/Amazon";
import Netflix from "components/pages/Clients/Netflix/Netflix";
import Spotify from "components/pages/Clients/Spotify/Spotify";

import UserAppLayout from "components/pages/UserApp/components/UserAppLayout/UserAppLayout";
import CreateEmployees from "components/pages/UserApp/components/CreateEmployees/CreateEmployees";
import Employee, {
  EmployeeProvider,
} from "components/pages/UserApp/components/Employee/Employee";

// import Home from "components/pages/WeatherApp/components/Home/WeatherHome";

// Homeworks
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_10 from "homeworks/homework_10/Homework_10";
import Homework_13 from "homeworks/Homework_13/Homework_13";

// Lessons
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_07_Practice from "lessons/Lesson_07_Practice/Lesson_07_Practice";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";
import Lesson_13 from "lessons/Lesson_13/Lesson_13";
import Weather from "components/pages/WeatherApp/components/Weather/Weather";
import WeatherHome from "components/pages/WeatherApp/components/Home/Home";
import { SavedCityProvider } from "components/pages/WeatherApp/WeatherAppLayout/SavedCityProvider";

function App() {
  return (
    // <EmployeeProvider>
    <BrowserRouter>
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.CLIENTS} element={<Clients/>}/>
          <Route path={ROUTES.CONTACT_US} element={<ContactUs/>}/>
          <Route path={ROUTES.ABOUT} element={<About/>}/>
          <Route path={ROUTES.LOGIN} element={<LogIn/>}/>
          <Route path={ROUTES.AMAZON} element={<Amazon/>}/>
          <Route path={ROUTES.NETFLIX} element={<Netflix/>}/>
          <Route path={ROUTES.SPOTIFY} element={<Spotify/>}/>
          <Route path={ROUTES.NOT_FOUND} element="This page is not found!!!"/>
          </Routes>
        </Layout> */}

      {/* <UserAppLayout>
          <Routes>
            <Route path="/" element={<CreateEmployees />} />
            <Route path="/employees" element={<Employee />} />
          </Routes>
        </UserAppLayout> */}

      {/* <WeatherAppLayout>
          <Routes>
            <Route path={ROUTE.HOME} element={<WeatherHome />} />
            <Route path={ROUTE.WEATHERS} element={<Weather/>} />
          </Routes>
        </WeatherAppLayout> */}
      <SavedCityProvider>
        <WeatherAppLayout>
          <Routes>
            <Route path={ROUTE.HOME} element={<WeatherHome />} />
            <Route path={ROUTE.WEATHERS} element={<Weather />} />
          </Routes>
        </WeatherAppLayout>
      </SavedCityProvider>

      {/* Homeworks */}
      {/* <Homework_07 /> */}
      {/* <Homework_09/> */}
      {/* <Homework_10/> */}
      {/* <Homework_13/> */}

      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07/> */}
      {/* <Lesson_07_Practice/> */}
      {/* <Lesson_08/> */}
      {/* <Lesson_09/> */}
      {/* <Lesson_10/> */}
      {/* <Lesson_11/> */}
      {/* <Lesson_13/> */}
    </BrowserRouter>
    // </EmployeeProvider>
  );
}
export default App;
