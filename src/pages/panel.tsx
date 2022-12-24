import { Button, Flex } from "@chakra-ui/react";
import { error } from "console";
import {Panel} from "../molecules/Panel";
import BaseComponentsContainer from "../template/BaseComponentsContainer";

const HomePanel = () => {
  return (
    <BaseComponentsContainer hasMenuActions>
      <Flex width="100%" py="34px" px="90px" direction="column">
        <Panel />
      </Flex>
    </BaseComponentsContainer>
  );
};

export default HomePanel;
