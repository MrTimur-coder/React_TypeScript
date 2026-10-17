import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 60px;
  padding-top: 90px;
  background: url("/images/rain.jpg") center / cover no-repeat;
  
  @media (max-width: 500px) {
    padding-top: 50px;
  }
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 550px;

  /* прячем подпись над полем */
  && label {
    display: none;
  }

  /* обёртка поля занимает всё свободное место */
  && > :first-child {
    flex: 1;
    margin: 0;
  }

  && input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 0 18px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    font-size: 14px;
    outline: none;
  }

  /* кнопка: фиксированная ширина, не тянется */
  && button {
    flex: 0 0 auto;
    width: auto;
    height: 40px;
    padding: 0 28px;
    border-radius: 999px;
    font-size: 14px;
  }

  @media (max-width: 500px ) {
  margin-top: 80px;
    width: 90%;
  }
`;

export const ButtonControl = styled.div`
  width: 90%;
  max-width: 550px;
  margin: 20px;
`;

export const ContainerWeather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-wrap: wrap;
  padding: 20px 26px 18px;
  border-radius: 20px;
  background: rgba(30, 55, 100, 0.55);
  backdrop-filter: blur(12px);
  color: #fff;
  
  @media (max-width: 500px) {
    gap: 14px;
    max-width: 350px;
    padding: 30px;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Temp = styled.div`
  font-size: 44px;
  font-weight: 600;
  line-height: 1;
`;

export const Text = styled.div`
  margin-top: 6px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

export const WeatherIcon = styled.img`
  width: 90px;
  height: 90px;
`;

export const SavedCity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  
  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
  }
`;

export const ErrorText = styled.p`
  border: 2px solid red;
  font-size: 16px;
  color: #ff8a8a;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 550px;
  padding: 20px 26px 18px;
  border-radius: 20px;
  background: rgba(30, 55, 100, 0.55);
  backdrop-filter: blur(12px);
  text-align: center;
`;

export const Info = styled.div``;

export const Loading = styled.img`
  width: 100px;
`;
