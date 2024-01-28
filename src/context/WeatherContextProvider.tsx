import { ReactNode, useState } from "react";
import { Weather, WeatherContext } from "./context";

const WeatherContextProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<Weather>({
    name: "",
    temp: null,
    temp_max: null,
    temp_min: null,
    humidity: null,
  });

  const getWeatherData = ({
    name,
    temp,
    temp_max,
    temp_min,
    humidity,
  }: Weather) => {
    setWeather({
      name,
      temp,
      temp_max,
      temp_min,
      humidity,
    });
  };

  return (
    <WeatherContext.Provider value={{ weather, getWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
