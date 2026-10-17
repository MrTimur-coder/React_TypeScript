import { type WeatherData } from "../../types";

export interface WeatherCardProps {
  weather: WeatherData;
  isSaved?: boolean;
}
