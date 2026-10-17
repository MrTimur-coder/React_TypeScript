import {
  PageWrapper,
  ContainerWeather,
  Card,
  WeatherInfo,
  Temp,
  Text,
  WeatherIcon,
  SavedCity,
  Info,
  ButtonControl,
} from "../Home/styles";
import { SavedCityContext } from "../../WeatherAppLayout/SavedCityProvider";

import Button from "components/Button/Button";
import { v4 } from "uuid";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";

function Weather() {
  const { savedWeather, setSavedWeather, updateWeather } = useContext(SavedCityContext);

  const WeatherContainer = savedWeather.map((savedWeatherVal: any) => {
    return (
      <ContainerWeather key={v4()}>
        {!!savedWeatherVal && (
          <Card>
            <WeatherInfo>
              <Info>
                <Temp>{Math.round(savedWeatherVal.temp)}°</Temp>
                <Text>{savedWeatherVal.city}</Text>
                <Text>{savedWeatherVal.time}</Text>
              </Info>
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${savedWeatherVal.icon}@4x.png`}
                alt={savedWeatherVal.description}
              />
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${savedWeatherVal.icon}@4x.png`}
                alt={savedWeatherVal.description}
              />
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${savedWeatherVal.icon}@4x.png`}
                alt={savedWeatherVal.description}
              />
            </WeatherInfo>

            <SavedCity>
              <Button
                button_info="Update"
                onClick={() => {
                  updateWeather(savedWeatherVal.city);
                  toast.success(`City ${savedWeatherVal.city} is updated successfully`);
                }}
              />
              <Button
                isRed
                button_info="Delete"
                onClick={() =>
                  setSavedWeather(
                    savedWeather.filter((weather: any) => {
                      return weather.city !== savedWeatherVal.city;
                    }),
                    toast.success(
                      `City ${savedWeatherVal.city} is deleted successfully`,
                    ),
                  )
                }
              />
            </SavedCity>
          </Card>
        )}
      </ContainerWeather>
    );
  });

  return (
    <PageWrapper>
      
      {savedWeather.length === 0 && <Text>No saved cities yet!</Text>}
      {WeatherContainer}
      {savedWeather.length > 0 && (
        <ButtonControl>
          <Button
            button_info="Remove All"
            isRed
            onClick={() =>
              setSavedWeather([], toast.success("All cities are removed successfully!"))
            }
          />
        </ButtonControl>
      )}
    </PageWrapper>
  );
}

export default Weather;
