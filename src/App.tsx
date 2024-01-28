import { Box } from "@chakra-ui/react";
import image from "./assets/image2.jpg";
import SearchField from "./components/SearchField";
import Temperature from "./components/Temperature";

const App = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      background={`url(${image})`}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      height={"100vh"}
    >
      <Box
        className="weatherUi"
        style={{
          background: "rgba( 229, 5, 5, 0.25)",
          backdropFilter: "blur(4px)",
        }}
        height={"max-content"}
        width={["90%", "70%", "50%", "30%"]}
        rounded={10}
        fontFamily={`"Exo 2", sans-serif`}
        boxShadow="10px 10px 2000px black"
        color={"black"}
      >
        <SearchField />
        <Temperature />
      </Box>
    </Box>
  );
};

export default App;
