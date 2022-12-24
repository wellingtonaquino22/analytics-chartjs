import { Flex, Menu } from "@chakra-ui/react";
import { gt } from "../styles/globalTheme";
import MenuButtom from "../components/MenuButton";

const MenuActions = () => {
  return (
    <Flex
      zIndex={999}
      position="fixed"
      top="64px"
      left="0"
      minWidth="240px"
      width="240px"
      minHeight="100%"
      background={gt.colors.brand_color_primary_dark}
      direction="column"
      paddingY="25px"
    >
      <Menu>
        <MenuButtom textLabel="Painel Administrativo" href="/panel" />
       
      </Menu>
    </Flex>
  );
};

export default MenuActions;
