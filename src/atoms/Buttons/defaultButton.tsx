import { Button } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface IButtonDefault
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  isDisabledBool?: boolean;
  isLoading?: boolean;
  nowColor?: string;
  nowColorHover?: string;
  alignSelf?: string;
  maxwidth?: string;
  fontSize?: string;
  isDisableted?: boolean;
  leftIcon?: ReactJSXElement;
  borderColor?: string;
  variant?: string;
  borderWidth?: number;
  nowColorText?: string;
  mt?: string;
}

const DefaultButton: React.FC<IButtonDefault> = ({
  children,
  isDisabledBool,
  isLoading,
  nowColorText,
  nowColor,
  nowColorHover,
  alignSelf,
  maxwidth,
  variant,
  fontSize,
  leftIcon,
  borderColor,
  borderWidth,
  mt,
  ...res
}) => {
  return (
    <Button
      {...res}
      mt={mt}
      background={nowColor}
      isDisabled={isDisabledBool}
      color={nowColorText || '#fff'}
      alignSelf={alignSelf}
      w="100%"
      maxW={maxwidth}
      variant={variant}
      fontSize={fontSize}
      height="44px"
      isLoading={isLoading}
      leftIcon={leftIcon}
      borderColor={borderColor}
      borderWidth={borderWidth}
      _hover={{
        background: nowColorHover,
      }}
    >
      {children}
    </Button>
  );
};

export default DefaultButton;
