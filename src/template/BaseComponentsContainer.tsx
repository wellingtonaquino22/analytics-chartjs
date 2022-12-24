import { Flex } from '@chakra-ui/react';
import MenuActions from '../molecules/MenuActions';
import HeaderBar from '../organisms/HeaderBar';

type BaseComponentsContainerProps = {
  children: React.ReactNode;
  hasMenuActions?: boolean;
};

const BaseComponentsContainer = ({
  children,
  hasMenuActions,
}: BaseComponentsContainerProps) => {
  return (
    <>
        <Flex bg="#F2F5F8" minHeight="100vh" direction="column">
          <HeaderBar 
          />
          <Flex paddingTop="65px" paddingLeft="240px" flex="1">
            {hasMenuActions && <MenuActions />}
            {children}
          </Flex>
        </Flex>
    </>
  );
};

export default BaseComponentsContainer;
