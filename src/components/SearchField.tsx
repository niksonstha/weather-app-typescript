import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { fetchWeatherData } from "../api/api";
import { Weather, useWeather } from "../context/context";
import "./SearchField.css";

const SearchField = () => {
  const [city, setCity] = useState("");
  const { getWeatherData } = useWeather();

  const showCityWeather = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const data = await fetchWeatherData(city);

      const weather: Weather = {
        name: data?.data.name,
        temp: data?.data.main.temp,
        temp_max: data?.data.main.temp_max,
        temp_min: data?.data.main.temp_min,
        humidity: data?.data.main.humidity,
      };

      getWeatherData(weather);

      setCity("");
    }
  };

  return (
    <Box width="90%" mx={"auto"} mt={5} border={"none"}>
      <input
        className="input-search"
        placeholder="City, Country..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: "transparent",
          borderBottom: "2px solid black",
          outline: "none",
        }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => showCityWeather(e)}
      />
    </Box>
  );
};

export default SearchField;
