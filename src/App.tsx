import { Route, Routes, BrowserRouter } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout/Layout";

// Pages
import Home from "components/pages/pages/EmployeeApp/Home/Home";
import Clients from "components/pages/pages/Clients/Clients";
import About from "components/pages/pages/EmployeeApp/About/About";
import ContactUs from "components/ContactUsForm/ContactUsForm";
import LogIn from "components/pages/pages/EmployeeApp/LogIn/LogIn";
import Amazon from "components/pages/pages/Clients/Amazon/Amazon";
import Netflix from "components/pages/pages/Clients/Netflix/Netflix";
import Spotify from "components/pages/pages/Clients/Spotify/Spotify";

// Homeworks
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_10 from "homeworks/homework_10/Homework_10";

// Lessons
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_07_Practice from "lessons/Lesson_07_Practice/Lesson_07_Practice";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/clients/amazon" element={<Amazon/>}/>
          <Route path="/clients/netflix" element={<Netflix/>}/>
          <Route path="/clients/spotify" element={<Spotify/>}/>
          <Route path="*" element="This page is not found!!!"/>
        </Routes>
      </Layout>
      {/* Homeworks */}
      {/* <Homework_07 /> */}
      {/* <Homework_09/> */}
      {/* <Homework_10/> */}

      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07/> */}
      {/* <Lesson_07_Practice/> */}
      {/* <Lesson_08/> */}
      {/* <Lesson_09/> */}
      {/* <Lesson_10/> */}
      {/* <Lesson_11/> */}
    </BrowserRouter>
  );
}
export default App;
