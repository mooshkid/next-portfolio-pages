import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex bg={useColorModeValue("white", "red")} justify={"space-between"} alignItems={'center'}>
        <Box>
          <Link href={'/'}>
            <Image src={'https://mooshkid.github.io/assets/slark_icon.png'} width={'60'} height={'60'} alt={'logo'} />
          </Link>
        </Box>
        <Flex gap={"4"}>
          <Link href={'/about'}>About</Link>
          <Link href={'/projects'}>Projects</Link>
          <Link href={'/contact'}>Contact</Link>
        </Flex>
        <ButtonGroup display="flex" justifyContent="center">
          <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
        </ButtonGroup>
      </Flex>
    </header>
  );
};

export default NavBar;
