import { createContext, useContext } from "react";

export type Weather = {
  name: string | "";
  temp: number | null;
  temp_max: number | null;
  temp_min: number | null;
  humidity: number | null;
};

interface WeatherContextType {
  weather: Weather;
  getWeatherData: ({
    name,
    temp,
    temp_max,
    temp_min,
    humidity,
  }: Weather) => void;
}

export const WeatherContext = createContext<WeatherContextType>({
  weather: {
    name: "",
    temp: null,
    temp_max: null,
    temp_min: null,
    humidity: null,
  },
  getWeatherData: () => {},
});

export const useWeather = () => {
  const context = useContext(WeatherContext);
  return context;
};
