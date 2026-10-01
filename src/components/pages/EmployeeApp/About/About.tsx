import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function About() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  }

  const goBack = () => {
    navigate(-1);
  }
  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button onClick={goBack} button_info="Go back" />
      </ButtonControl>
      <ButtonControl>
        <Button onClick={goToHomePage} button_info="Go to Home page" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
