import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Weather from "./pages/Weather/Weather";

import { WeatherContext } from "./context";
import { WEATHERAPP_ROUTES } from "./constants";
import {
  type WeatherData,
  type WeatherError,
  type WeatherResponse,
} from "./types";

function React_Final_Project() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | undefined>(
    undefined,
  );

  const [savedWeather, setSavedWeather] = useState<WeatherData[]>([]);
  const [error, setError] = useState<WeatherError | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [updatingWeatherUid, setUpdatingWeatherUid] = useState<
    string | undefined
  >(undefined);

  const getWeather = async (city: string): Promise<void> => {
    if (!city.trim()) {
      toast.warning("Please enter a city name.");
      return;
    }

    setCurrentWeather(undefined);
    setError(undefined);

    const APP_ID = import.meta.env.VITE_OPENWEATHER_API_KEY;

    if (!APP_ID) {
      setError({
        cod: "API key missing",
        message: "Add your OpenWeatherMap API key.",
      });

      toast.error("OpenWeatherMap API key is missing.");
      return;
    }

    try {
      setIsLoading(true);
      const requestedAt = Date.now();

      const response = await axios.get<WeatherResponse>(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            units: "metric",
            q: city.trim(),
            appid: APP_ID,
          },
        },
      );

      setCurrentWeather({
        ...response.data,
        uid: v4(),
        requestedAt,
      });
    } catch (error) {
      if (axios.isAxiosError<WeatherError>(error) && error.response) {
        setError(error.response.data);
        toast.error(error.response.data.message);
      } else {
        setError({
          cod: "Network Error",
          message: "Unable to get weather. Please try again.",
        });

        toast.error("Unable to get weather. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const saveWeather = (): void => {
    if (currentWeather) {
      setSavedWeather((previousWeather) => [
        ...previousWeather,
        currentWeather,
      ]);

      setCurrentWeather(undefined);
      toast.success("Weather saved successfully.");
    }
  };

  const deleteCurrentCard = (): void => {
    setCurrentWeather(undefined);
    setError(undefined);

    if (error) {
      toast.success("Error deleted successfully.");
    }
  };

  const updateWeather = async (uid: string): Promise<void> => {
    if (updatingWeatherUid) {
      return;
    }

    const weatherToUpdate = savedWeather.find((weather) => weather.uid === uid);

    if (!weatherToUpdate) {
      return;
    }

    const APP_ID = import.meta.env.VITE_OPENWEATHER_API_KEY;

    if (!APP_ID) {
      alert("OpenWeatherMap API key is missing.");
      return;
    }

    try {
      setUpdatingWeatherUid(uid);

      const requestedAt = Date.now();

      const response = await axios.get<WeatherResponse>(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            units: "metric",
            id: weatherToUpdate.id,
            appid: APP_ID,
          },
        },
      );

      setSavedWeather((previousWeather) =>
        previousWeather.map((weather) => {
          if (weather.uid !== uid) {
            return weather;
          }

          return {
            ...response.data,

            uid: weather.uid,

            requestedAt,
          };
        }),
      );

      alert("Weather updated successfully.");
    } catch (error) {
      if (axios.isAxiosError<WeatherError>(error) && error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to update weather. Please try again.");
      }
    } finally {
      setUpdatingWeatherUid(undefined);
    }
  };

  const deleteWeather = (uid: string): void => {
    setSavedWeather((previousWeather) =>
      previousWeather.filter((weather) => weather.uid !== uid),
    );

    toast.success("Weather deleted successfully.");
  };

  const deleteAllWeather = (): void => {
    setSavedWeather([]);
    toast.success("All cards deleted successfully.");
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        savedWeather,
        error,
        isLoading,
        updatingWeatherUid,
        getWeather,
        updateWeather,
        saveWeather,
        deleteCurrentCard,
        deleteWeather,
        deleteAllWeather,
      }}
    >
      <Layout>
        <Routes>
          <Route path={WEATHERAPP_ROUTES.HOME} element={<Home />} />
          <Route path={WEATHERAPP_ROUTES.WEATHER} element={<Weather />} />

          <Route
            path="*"
            element={<Navigate to={WEATHERAPP_ROUTES.HOME} replace />}
          />
        </Routes>
      </Layout>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastClassName="weather-toast"
      />
    </WeatherContext.Provider>
  );
}

export default React_Final_Project;
