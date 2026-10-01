import Button from "components/Button/Button";
import { PageWrapper, AboutSpotify, Title } from "./styles";
import { useNavigate } from "react-router-dom";

function Spotify() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
  return (
    <PageWrapper>
      <Title>Spotify</Title>
      <AboutSpotify>
        Spotify is a Swedish company founded in 2008 that provides
        music, comedy, podcast, and streaming services. As an employer, Spotify
        is interested in candidates who possess strong communication,
        interpersonal, organizational, and prioritization skills to "join the
        band." The company is proud to provide a discrimination-free workplace
        and believes its diversity of perspectives, backgrounds, and experience
        creates a better work environment for its team and a better product for
        its users. Spotify's associates depend on one another, strive to stay in
        sync, and make decisions based on values of innovation,
      </AboutSpotify>
      <Button button_info=" <- Go back" onClick={goBack}/>
    </PageWrapper>
  );
}

export default Spotify;
