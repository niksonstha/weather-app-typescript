import axios from "axios";

export const fetchWeatherData = async (city: string) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_URL}?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};
