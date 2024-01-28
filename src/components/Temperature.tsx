import { Box, Text } from "@chakra-ui/react";
import { useWeather } from "../context/context";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const Temperature = () => {
  const { weather } = useWeather();
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={5}
      mb={5}
    >
      {weather.name ? (
        <>
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={"4rem"} letterSpacing={3}>
              <strong>{weather.temp}°</strong>
              <small>C</small>
            </Text>
            <Text fontSize={"1.4rem"} letterSpacing={3}>
              {weather.name}
            </Text>
          </Box>
          <Box
            display={"flex"}
            gap={10}
            mt={5}
            width={"80%"}
            mx={"auto"}
            flexDir={"column"}
          >
            <Box display={"flex"} alignItems={"center"} gap={3}>
              <Text>Max-Temp</Text>
              <FaTemperatureHigh />
              <Text>
                {weather.temp_max}° <small>C</small>
              </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={3}>
              <Text>Min-Temp</Text>
              <FaTemperatureLow />
              <Text>
                {weather.temp_min}° <small>C</small>
              </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={3}>
              <Text>Humidity</Text>
              <WiHumidity />
              <Text>{weather.humidity}%</Text>
            </Box>
          </Box>
        </>
      ) : (
        <Text fontSize={["1rem", "1.2rem"]}>
          "Please enter a valid city or country name..."
        </Text>
      )}
    </Box>
  );
};

export default Temperature;
