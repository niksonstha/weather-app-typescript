import { Box } from "@chakra-ui/react";

const SearchField = () => {
  return (
    <Box width="90%" mx={"auto"} mt={5} border={"none"}>
      <input
        placeholder="City, Country..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: "transparent",
          borderBottom: "2px solid green",
          outline: "none",
        }}
      />
    </Box>
  );
};

export default SearchField;
