import { useContext } from "react";

import Button from "components/Button/Button";
import { WeatherContext } from "../../context";

import {
  CardWrapper,
  WeatherInfo,
  Temperature,
  City,
  WeatherIcons,
  WeatherIcon,
  RequestTimes,
  TimeText,
  CardActions,
} from "./styles";

import { type WeatherCardProps } from "./types";

const formatUserTime = (timestamp: number): string => {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
};

const formatRegionTime = (
  timestamp: number,
  timezone: number | undefined,
): string | undefined => {
  if (timezone === undefined) {
    return undefined;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",

    timeZone: "UTC",
  }).format(new Date(timestamp + timezone * 1000));
};

function WeatherCard({ weather, isSaved = false }: WeatherCardProps) {
  const {
    saveWeather,
    deleteCurrentCard,
    deleteWeather,
    updateWeather,
    updatingWeatherUid,
  } = useContext(WeatherContext);



  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

  const isUpdating = updatingWeatherUid === weather.uid;

  const isUpdateDisabled = updatingWeatherUid !== undefined;

  const regionTime = formatRegionTime(
    weather.requestedAt,
    weather.timezone,
  );

  const userTime = formatUserTime(weather.requestedAt);

  return (
    <CardWrapper>
      <WeatherInfo>
        <div>
          <Temperature>{Math.round(weather.main.temp)}°</Temperature>
          <City>{weather.name}</City>
        </div>

        <WeatherIcons>
          <WeatherIcon
            src={iconUrl}
            alt={weather.weather[0].description}
          />

          <WeatherIcon src={iconUrl} alt="" />
          <WeatherIcon src={iconUrl} alt="" />
        </WeatherIcons>
      </WeatherInfo>

      {isSaved && (
        <RequestTimes>
          {regionTime && (
            <TimeText>Region time: {regionTime}</TimeText>
          )}

          <TimeText>Your request time: {userTime}</TimeText>
        </RequestTimes>
      )}

      <CardActions>
        {!isSaved && (
          <Button
            name="Save"
            onClick={saveWeather}
          />
        )}

        {isSaved && (
          <Button
            name={isUpdating ? "Updating..." : "Update"}
            disabled={isUpdateDisabled}
            onClick={() => {
              updateWeather(weather.uid);
            }}
          />
        )}

        <Button
          name="Delete"
          disabled={isUpdating}
          onClick={
            isSaved
              ? () => deleteWeather(weather.uid)
              : deleteCurrentCard
          }
        />
      </CardActions>
    </CardWrapper>
  );
}

export default WeatherCard;