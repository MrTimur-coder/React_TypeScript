import { createContext } from "react";

import { type WeatherContextData } from "./types";

export const WeatherContext = createContext<WeatherContextData>({
  currentWeather: undefined,
  savedWeather: [],
  error: undefined,

  isLoading: false,
  updatingWeatherUid: undefined,

  getWeather: async () => undefined,
  updateWeather: async () => undefined,

  saveWeather: () => undefined,
  deleteCurrentCard: () => undefined,
  deleteWeather: () => undefined,
  deleteAllWeather: () => undefined,
});
