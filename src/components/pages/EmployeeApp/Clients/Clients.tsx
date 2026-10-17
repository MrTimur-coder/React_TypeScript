import { Companies, CompanyLogo, CompanyLinks, PageWrapper, Title } from "./styles";

function Clients() {
  const companyLogos = {
    "/clients/amazon": "https://assets.flexjobs.com/assets/jctblobcontent/942/primary.png",
    "/clients/spotify": "https://assets.flexjobs.com/assets/jctblobcontent/30191/primary.png",
    "/clients/netflix": "https://assets.flexjobs.com/assets/jctblobcontent/6714/primary.png"
  }
  const companyLogosKey = Object.keys(companyLogos)
  const companyLogosValue = Object.values(companyLogos)

  const companyLink = companyLogosValue.map((value, index) => {
    return <CompanyLinks key={index} to={companyLogosKey[index]}><CompanyLogo src={value}/></CompanyLinks>
  })

  return (
    <PageWrapper>
      <Title>Our Clients</Title>
      <Companies>
        {companyLink}
         {/* <CompanyLinks to="/clients/amazon"><CompanyAmazon src="https://assets.flexjobs.com/assets/jctblobcontent/942/primary.png"/></CompanyLinks>
         <CompanyLinks to="/clients/spotify"><CompanySpotify src="https://assets.flexjobs.com/assets/jctblobcontent/30191/primary.png"/></CompanyLinks>
         <CompanyLinks to="/clients/netflix"><CompanyNetflix src="https://assets.flexjobs.com/assets/jctblobcontent/6714/primary.png"/></CompanyLinks> */}
      </Companies>
    </PageWrapper>
  );
}

export default Clients;
