import { Companies, CompanyAmazon, CompanyLinks, CompanyNetflix, CompanySpotify, PageWrapper, Title } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <Title>Our Clients</Title>
      <Companies>
         <CompanyLinks to="/clients/amazon"><CompanyAmazon src="https://assets.flexjobs.com/assets/jctblobcontent/942/primary.png"/></CompanyLinks>
         <CompanyLinks to="/clients/spotify"><CompanySpotify src="https://assets.flexjobs.com/assets/jctblobcontent/30191/primary.png"/></CompanyLinks>
         <CompanyLinks to="/clients/netflix"><CompanyNetflix src="https://assets.flexjobs.com/assets/jctblobcontent/6714/primary.png"/></CompanyLinks>
      </Companies>
    </PageWrapper>
  );
}

export default Clients;
