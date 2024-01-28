import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import WeatherContextProvider from "./context/WeatherContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </ChakraProvider>
);
