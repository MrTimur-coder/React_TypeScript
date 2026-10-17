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
  Loading,
} from "./styles";
import { useContext, useState, type ChangeEvent } from "react";
import { SavedCityContext } from "../../WeatherAppLayout/SavedCityProvider";
import LoadingGif from "assets/round-loading-animation-gif.webp";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { toast } from "react-toastify";
import type { WeatherInterface } from "./types";

function WeatherHome() {
  const APP_ID = "43cba59423ce2e6e2ecd59543ed9bcae";
  
  const { savedWeather, setSavedWeather } = useContext(SavedCityContext);

  const [weather, setWeather] = useState<WeatherInterface | undefined>(
    undefined,
  );
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
        time: formattedDate,
      });
    } catch (error: any) {
      // Тут пишем логику когда нам приходит ошибка
      setWeather(undefined);
      setError(error.response?.data?.message ?? "Network error!");
    } finally {
      setIsLoading(false);
    }
  };

  const saveCity = (saveWeatherCity: any) => {
    if (!weather) return;

    setSavedWeather((prev: any) => {
      const exists = prev.some((item: any) => item.city === weather.city);
      if (exists) return prev;
      return [...prev, weather];
    });
    toast.success(
      `Weather about ${saveWeatherCity.city} is saved successfully!`,
    );
  };

  const deleteCity = (cityToDelete: any) => {
    setSavedWeather(
      savedWeather.filter((value: any) => value.city !== cityToDelete.city),
    );
    toast.success(
      `Weather about ${cityToDelete.city} is deleted successfully!`,
    );
  };

  return (
    <PageWrapper>
      <SearchRow>
        <Input
          id="search_input"
          name="search"
          placeholder="Enter the city name ..."
          label="Search"
          value={search}
          onChange={onSearch}
        />
        <Button
          disabled={isLoading}
          button_info="Search"
          onClick={() => {
            if (!search.trim()) {
              toast.info("Search input can't be empty! Enter the city name!");
              return;
            }
            getWeather();
          }}
        />
      </SearchRow>
      {!!isLoading && <Loading src={LoadingGif}></Loading>}
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
                onClick={() => saveCity(weather)}
                disabled={savedWeather.some(
                  (item: any) => item.city === weather.city,
                )}
              />
              <Button
                button_info="Delete"
                onClick={() => deleteCity(weather)}
                disabled={
                  !savedWeather.some((item: any) => item.city === weather?.city)
                }
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
