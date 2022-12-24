import { Box, Flex, Img } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
function LoadingKc() {
  return (
    <Flex
      direction={"column"}
      w={"full"}
      h={"full"}
      justifyContent={"center"}
      my={"20rem"}
    >
      <Box mx={"auto"} pl={"1rem"} pb={'1rem'}>
        <Img src="/logo.png" />
      </Box>
      <Box mx={"auto"}>
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size={"xl"}
        />
      </Box>
    </Flex>
  );
}

export default LoadingKc;
