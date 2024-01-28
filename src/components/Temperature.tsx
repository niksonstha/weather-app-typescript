import { Box, Image, Text } from "@chakra-ui/react";
import sunny from "../assets/sunny.png";
const Temperature = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={5}
      color={"#AFC8AD"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={sunny} alt="sunny" height={"9rem"} />
        <Text fontSize={"4rem"} letterSpacing={3}>
          <strong>100°</strong>
          <small>C</small>
        </Text>
        <Text fontSize={"1.4rem"} letterSpacing={3}>
          Kathmandu
        </Text>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Temperature;