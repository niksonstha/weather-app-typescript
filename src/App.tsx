import { Box } from "@chakra-ui/react";
import image from "./assets/image.jpg";
import SearchField from "./components/SearchField";

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
        style={{
          background: "rgba(67,237,28,0.1)",
          backdropFilter: "blur(11px)",
        }}
        height={"70vh"}
        width={["90%", "70%", "50%", "30%"]}
        rounded={10}
        color={"white"}
        fontFamily={`"Exo 2", sans-serif`}
      >
        <SearchField />
      </Box>
    </Box>
  );
};

export default App;
