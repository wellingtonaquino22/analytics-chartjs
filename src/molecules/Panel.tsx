import { Box } from "@chakra-ui/react";
import Cards from "./Cards";
import Graphcs from "./Graphcs";

export function Panel() {
  return (
    <>
      <Box
        alignItems={"center"}
        borderRadius={"md"}
        bg="white"
        w={"full"}
        padding={"2rem"}
        shadow="xl"
      >
        <Cards />
        <Graphcs />
      </Box>
    </>
  );
}
