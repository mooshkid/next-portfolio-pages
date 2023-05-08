import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex bg={useColorModeValue("white", "red")} justify={"space-between"} alignItems={'center'}>
      <Box>
        <Text>LOGO</Text>
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
  );
};

export default NavBar;
