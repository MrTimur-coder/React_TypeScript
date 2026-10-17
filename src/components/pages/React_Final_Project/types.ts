export interface WeatherResponse {
  id: number; 
  name: string;
  timezone?: number; 
  main: { temp: number };

  weather: {
    description: string;
    icon: string;
  }[];
}

export interface WeatherData extends WeatherResponse {
  uid: string;
  requestedAt: number; 
}

export interface WeatherError {
  cod: number | string;
  message: string;
}

export interface WeatherContextData {
  currentWeather: WeatherData | undefined;
  savedWeather: WeatherData[];
  error: WeatherError | undefined;
  isLoading: boolean;
  updatingWeatherUid: string | undefined; 

  getWeather: (city: string) => Promise<void>;
  updateWeather: (uid: string) => Promise<void>; 
  saveWeather: () => void;
  deleteCurrentCard: () => void;
  deleteWeather: (uid: string) => void;
  deleteAllWeather: () => void;
}
