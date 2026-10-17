import axios from "axios";
import { createContext, useState } from "react";
import type { LayoutProps, SavedCityInterface } from "./types";

// 1. Создаём «коробку»
export const SavedCityContext = createContext<any>(null);

// 2. Провайдер: хранит город и раздаёт его всем внутри
export function SavedCityProvider({ children }: LayoutProps) {
  const [savedWeather, setSavedWeather] = useState<SavedCityInterface[]>([]);

  const APP_ID = "43cba59423ce2e6e2ecd59543ed9bcae";

  const updateWeather = async (city: string) => {
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric`;

    try {
      const response = await axios.get(WEATHER_URL);

      const updatedCity = {
        city: response.data.name,
        description: response.data.weather[0].description,
        temp: response.data.main.temp,
        icon: response.data.weather[0].icon,
        time: new Date().toLocaleString("ru-RU"),
      };

      setSavedWeather((prev) =>
        prev.map((item) => (item.city === city ? updatedCity : item)),
      );
    } catch (err) {
      console.log("Update failed:", err);
    }
  };

  return (
    <SavedCityContext.Provider
      value={{ savedWeather, setSavedWeather, updateWeather }}
    >
      {children}
    </SavedCityContext.Provider>
  );
}
