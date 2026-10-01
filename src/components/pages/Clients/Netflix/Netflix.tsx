import Button from "components/Button/Button";
import { PageWrapper, AboutNetflix, Title } from "./styles";
import { useNavigate } from "react-router-dom";

function Netflix() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
  return (
    <PageWrapper>
      <Title>Netflix</Title>
      <AboutNetflix>
        Described as the world's top internet television network, Netflix is a
        publicly-traded entertainment company offering video-on-demand and
        streaming media. As an employer, Netflix fosters an "amazing and
        unusual" workplace culture that values diversity and inclusion and
        offers a range of benefits to support well-being and the successful
        balance between work and life. This includes offering team members the
        freedom and responsibility to do their best work and maintaining an
        environment that promotes independent decision-making, the avoidance of
        rules, being candid, and values like curiosity, innovation,
        selflessness, courage, passion, and integrity. To join Netflix,
        qualified applicants should want to be part of a business that is
        “revolutionizing entertainment." In the past, the employer has posted
        full-time and part-time schedules, temporary roles, remote jobs, and
        freelance contracts in art & creative, writing, computer & IT, software
        development, entertainment & media, and other fields. opportunities
      </AboutNetflix>
      <Button button_info=" <- Go back" onClick={goBack}/>
    </PageWrapper>
  );
}

export default Netflix;
