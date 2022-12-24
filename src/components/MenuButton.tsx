import { Flex } from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";

export interface Items {
  text: string;
  href: string;
}
interface MenuButtomProps {
  leftIcon?: ReactElement;
  textLabel: string;
  variant?: "cascade" | "cascade-item";
  href?: string;
  items?: Items[];
}

const MenuButtom: React.FC<MenuButtomProps> = ({
  leftIcon,
  textLabel,
  variant,
  items,
  href = "#",
}) => {
  const router = useRouter();

  const checkHrefAndPathname = () => {
    if (router.pathname === href) {
    }

    items &&
      items.map((item) => {
        if (router.pathname === item.href) {
        }
      });
  };

  return (
    <>
      <Flex
        width="100%"
        height="44px"
        cursor="pointer"
        padding="22px 16px"
        color="#fff"
        align="center"
        fontFamily="Montserrat"
        onClick={() => router.push(href)}
        _hover={{
          background: "rgba(255,255,255,0.2)",
        }}
      >
        {leftIcon && (
          <Flex fontSize="18px" mr="12px">
            {leftIcon}
          </Flex>
        )}

        <Flex
          flex="1"
          fontSize="12px"
          fontWeight={600}
          paddingLeft={variant === "cascade-item" ? "26px" : "0"}
        >
          {textLabel}
        </Flex>
      </Flex>
    </>
  );
};

export default MenuButtom;
