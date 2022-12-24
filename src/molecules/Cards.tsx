import { Box, Flex,Text } from "@chakra-ui/react";
import { DoughnutGraphInc } from "../components/DoughnutGraph/Doughnut-inconsistencia";
import DoughnutGraphRegDom from "../components/DoughnutGraph/Doughnut-reg-dom";
import DoughnutGraphRegIn from "../components/DoughnutGraph/Doughnut-register";

export default function Cards(){
  return (
    <Box>
      <Text
        color="blackAlpha.800"
        fontSize="x-large"
        fontWeight="bold"
        marginBottom="5"
      >
        PAINEL ADMINISTRATIVO
      </Text>
        <Flex gap="2" direction="row">
          <Box
            cursor="pointer"
            bg="#FEFEFE"
            shadow="lg"
            border="1px"
            borderColor="blackAlpha.100"
            w="full"
            h="8rem"
            rounded="md"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              w="full"
              h="full"
              gap="2.3rem"
              pl="4"
            >
              <Text fontSize="xl" fontWeight="bold" color="blackAlpha.800">
                Usuários <Text ml="2">Online</Text>
              </Text>

              <Box fontSize="4xl" fontWeight="bold" color="blackAlpha.800">
                85
              </Box>
              <Box w="7rem" color="#DCDCDC">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            </Flex>
          </Box>
          <Box
            cursor="pointer"
            bg="#FEFEFE"
            shadow="lg"
            border="1px"
            borderColor="blackAlpha.100"
            w="full"
            h="8rem"
            rounded="md"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              w="full"
              h="full"
              gap="2.3rem"
            >
              <Box w="6.5rem" textAlign="center" position={"absolute"} mr="64">
                <DoughnutGraphInc />
              </Box>
              <Text position={"relative"} fontSize="sm">
                2%
              </Text>
              <Box
                marginBottom="6.5rem"
                fontWeight="semibold"
                color="blackAlpha.800"
              >
                <Text position="absolute" fontSize="14" w="15rem">
                  Inconsistência de cadastro individual
                  <Text>1.602</Text>
                  <Text>Meta:0</Text>
                </Text>
              </Box>
              <Box mt="6" ml="20" w="6rem" color="#DCDCDC">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            </Flex>
          </Box>
          <Box
            cursor="pointer"
            bg="#FEFEFE"
            shadow="lg"
            border="1px"
            borderColor="blackAlpha.100"
            w="full"
            h="8rem"
            rounded="md"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              w="full"
              h="full"
              gap="2.3rem"
              pl="4"
            >
              <Box w="7rem" textAlign="center" position={"absolute"} mr="64">
                <DoughnutGraphRegIn />
              </Box>
              <Text position={"relative"} fontSize="sm">
                37%
              </Text>
              <Box
                marginBottom="6.5rem"
                fontWeight="semibold"
                color="blackAlpha.800"
              >
                <Text position="absolute" fontSize="14" w="15rem">
                  cadastro individual
                  <Text>
                    <br />
                    66.744
                  </Text>
                  <Text>Meta: 75.295</Text>
                </Text>
              </Box>
              <Box mt="4" ml="20" w="6rem" color="#DCDCDC">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            </Flex>
          </Box>
          <Box
            cursor="pointer"
            bg="#FEFEFE"
            shadow="lg"
            border="1px"
            borderColor="blackAlpha.100"
            w="full"
            h="8rem"
            rounded="md"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              w="full"
              h="full"
              gap="2.3rem"
              pl="4"
            >
              <Box w="7rem" textAlign="center" position={"absolute"} mr="64">
                <DoughnutGraphRegDom />
              </Box>
              <Text position={"relative"} fontSize="sm">
                0%
              </Text>
              <Box
                marginBottom="6.5rem"
                fontWeight="semibold"
                color="blackAlpha.800"
              >
                <Text position="absolute" fontSize="14" w="15rem">
                  cadastro Domiciliar
                  <Text>
                    <br />
                    35.517
                  </Text>
                  <Text>Meta: 29.915</Text>
                </Text>
              </Box>
              <Box mt="4" ml="20" w="6rem" color="#DCDCDC">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
  )
}