import axios from "axios";
import {
  PageWrapper,
  SearchRow,
  ContainerWeather,
  Card,
  WeatherInfo,
  Temp,
  Text,
  WeatherIcon,
  SavedCity,
  ErrorText,
} from "./styles";
import { useState, type ChangeEvent } from "react";
import { useSavedCity } from "../../WeatherAppLayout/SavedCityProvider";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

function WeatherHome() {
  const APP_ID = "43cba59423ce2e6e2ecd59543ed9bcae";

  const [weather, setWeather] = useState<
    | { city: string; description: string; temp: number; icon: string, time: string }
    | undefined
  >(undefined);
  const { savedWeather, setSavedWeather } = useSavedCity();
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const now = new Date();
  const formattedDate: any = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .format(now)
    .replace(",", "");

    console.log(formattedDate)

  const getWeather = async () => {
    const WEATHER_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APP_ID}&units=metric`;

    try {
      setIsLoading(true);
      setError(undefined);
      const response = await axios.get(WEATHER_URL);
      // Тут пишем логику по успешно пришедшим данным с сервера
      setWeather({
        city: response.data.name,
        description: response.data.weather[0].description,
        temp: response.data.main.temp,
        icon: response.data.weather[0].icon,
        time: formattedDate
      });
    } catch (error: any) {
      // Тут пишем логику когда нам приходит ошибка
      setWeather(undefined);
      setError(error.response?.data?.message ?? "Network error!");
    } finally {
      setIsLoading(false);
    }
  };

  const saveCity = () => {
    if (!weather) return;

    setSavedWeather((prev: any) => {
      const exists = prev.some((item: any) => item.city === weather.city);
      if (exists) return prev;
      return [...prev, weather];
    });
    alert(`City is saved successfully!`);
  };

//  const updateCity = () => {
//     getWeather();
//   };

  const deleteCity = () => {
    setSavedWeather([]);
    alert(
      `City ${savedWeather[savedWeather.length - 1].city} is deleted successfully!`,
    );
  };

  return (
    <PageWrapper>
      <SearchRow>
        <Input
          id="search_input"
          name="search"
          placeholder="Enter your request"
          label="Search"
          value={search}
          onChange={onSearch}
        />
        <Button
          disabled={isLoading}
          button_info="Search"
          onClick={() => {
            if (!search.trim()) {
              alert("Search input can't be empty! Enter city name!");
              return;
            }
            getWeather();
          }}
        />
      </SearchRow>
      <ContainerWeather>
        {!!weather && (
          <Card>
            <WeatherInfo>
              <div>
                <Temp>{Math.round(weather.temp)}°</Temp>
                <Text>{weather.city}</Text>
                <Text>{weather.time}</Text>
              </div>
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                alt={weather.description}
              />
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                alt={weather.description}
              />
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                alt={weather.description}
              />
            </WeatherInfo>

            <SavedCity>
              <Button
                button_info="Save"
                onClick={saveCity}
                disabled={savedWeather.some(
                  (item: any) => item.city === weather.city,
                )}
              />
              <Button
                button_info="Delete"
                onClick={deleteCity}
                disabled={savedWeather.length === 0}
                isRed
              />
            </SavedCity>
          </Card>
        )}

        {!!error && <ErrorText>API Error: {error} </ErrorText>}
      </ContainerWeather>
    </PageWrapper>
  );
}

export default WeatherHome;
