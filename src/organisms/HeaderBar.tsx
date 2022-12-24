import {
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";
import LogoMarques from "../atoms/Logo/logoMarques";
import { useKeycloak } from "@react-keycloak/web";

const HeaderBar = () => {
  const router = useRouter();
  const {keycloak} = useKeycloak()
  
  const handleLogout = () => {
    keycloak.logout()
    localStorage.clear()
  };

  return (
    <Flex
      shadow={"md"}
      zIndex={999}
      position="fixed"
      top="0"
      left="0"
      background="#fff"
      width="100%"
      height="64px"
      align="center"
      justify="space-between"
      paddingRight="75px"
      // paddingLeft={variant === 'menu' ? '32px' : '75px'}
    >
      <Head>
        <title>Marques Consult</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <script
          dangerouslySetInnerHTML={{
            __html: ` (function(w,d,u){
                    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                    })(window,document,'https://cdn.bitrix24.com.br/b14165429/crm/site_button/loader_13_orlw46.js');`,
          }}
        />
      </Head>

      <Flex align="center">
        <Flex align="center" mr="27px" cursor="pointer"></Flex>

        <LogoMarques />
      </Flex>

      <Flex align="center">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                alignItems='center'
                isActive={isOpen}
                as={Button}
                ml="25px"
                bg="#ddd"
                borderRadius="100%"
                height="50px"
                width="50px"
              >
                <Flex></Flex>
              </MenuButton>

              <MenuList
                alignItems="center"
                width="200px"
                padding="10px"
                display="flex"
                flexDirection="column"
              >
                <Button
                  variant="link"
                  fontSize="16px"
                  fontWeight="bold"
                  color="#333"
                  mb="20px"
                  width="max-content"
                >
                  Meu perfil
                </Button>

                <Button
                  variant="link"
                  fontSize="16px"
                  fontWeight="bold"
                  color="#333"
                  width="max-content"
                  onClick={handleLogout}
                >
                  Sair
                </Button>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Flex>
  );
};

export default HeaderBar;
