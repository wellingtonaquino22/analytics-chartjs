import { Box, Flex, Text } from "@chakra-ui/react";
import GraphAreaMedico from "../components/GraphArea/GraphAeraMedico";
import GraphAreaACS from "../components/GraphArea/GraphAreaACS";
import GraphAreaEnfermeiro from "../components/GraphArea/GraphAreaEnfermeiro";
import GraphAreaOdonto from "../components/GraphArea/GraphAreaOdonto";

export default function Graphcs() {
  return(
    <>
    <Flex mt="4" gap="2" textAlign="center" justifyContent="center">
        <Box
          cursor="pointer"
          bg="#FEFEFE"
          shadow="lg"
          border="1px"
          borderColor="blackAlpha.100"
          h="full"
          rounded="md"
          w="88rem"
        >
          <Text my="5" fontWeight="bold" color="#727272">
            Total visitas ACS
          </Text>
          <GraphAreaACS />
        </Box>
        <Box
          cursor="pointer"
          bg="#FEFEFE"
          shadow="lg"
          border="1px"
          borderColor="blackAlpha.100"
          h="full"
          rounded="md"
          w='full'
        >
          <Text my="5" fontWeight="bold" color="#727272">
            Atendimento Odontológico
          </Text>
          <GraphAreaOdonto />
        </Box>
      </Flex>
      <Flex mt="4" gap="2" textAlign="center" justifyContent="center">
        <Box
          cursor="pointer"
          bg="#FEFEFE"
          shadow="lg"
          border="1px"
          borderColor="blackAlpha.100"
          h="full"
          rounded="md"
          w="full"
        >
          <Text my="5" fontWeight="bold" color="#727272">
            Atendimento Médico
          </Text>
          <GraphAreaMedico />
        </Box>
        <Box
          cursor="pointer"
          bg="#FEFEFE"
          shadow="lg"
          border="1px"
          borderColor="blackAlpha.100"
          h="full"
          rounded="md"
          w="full"
        >
          <Text my="5" fontWeight="bold" color="#727272">
            Atendimento Enfermeiro
          </Text>
          <GraphAreaEnfermeiro />
        </Box>
      </Flex>
      </>
  )
} 