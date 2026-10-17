import Button from "components/Button/Button";
import { PageWrapper, AboutAmazon, Title } from "./styles";
import { useNavigate } from "react-router-dom";

function Amazon() {
   const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
  return (
    <PageWrapper>
      <Title>Amazon</Title>
      <AboutAmazon>
        Amazon is the largest online retailer in the world. The
        Fortune 500 company offers traditional and e-books, household items,
        apparel, electronics, movies, music, and a vast selection of other
        products. Amazon employs more than 1 million people around the world and
        has offered part-time, flexible schedule, freelance, seasonal,
        temporary, and remote jobs in the past. In addition to corporate,
        fulfillment center, and university employment, Amazon maintains a
        work-from-home program designed to cater to international candidates
        eager and qualified to work remotely. 
      </AboutAmazon>
      <Button button_info=" < Go back" onClick={goBack}/>
    </PageWrapper>
  );
}

export default Amazon;
