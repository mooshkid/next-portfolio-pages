import React from "react";
import Image from "next/image";
import { Container, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
// import Link from "next/link";
import { Link } from "@chakra-ui/next-js";

const Hero = () => {
  return (
    <Container maxW={"7xl"} mx={"auto"}>
      <Stack id="hero" minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex align={"center"} justify={"center"} mx={"auto"}>
          <Stack flex={1} spacing={6} w={"full"} maxW={"lg"}>
            <Heading as="h1" size="3xl">
              Hi, I&apos;m{" "}
              <Text as="span" bgGradient="linear(to-l, #007cf0, #00dfd8)" bgClip="text">
                Masa
              </Text>
            </Heading>
            <Text fontSize="3xl">Front-end Developer</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Stack direction="row" spacing="4">

              {/* make this part a map  */}
              <Link href="">Resume</Link>
              <Link href="https://github.com/mooshkid/" target="_blank">
                GitHub
              </Link>
              <Link href="" boxShadow={useColorModeValue("0 0 5px #f9cb28", "0 0 5px #007cf0")} p="5px 10px" borderRadius="5px" border="1px" borderColor={useColorModeValue("#ff4d4d", "white")}>
                Coffee
              </Link>
              {/* map to here  */}

            </Stack>
          </Stack>
          <Flex flex={1}>
            <Image
              src={"https://mooshkid.github.io/assets/slark_icon.png"}
              alt="hero image"
              width={500}
              height={300}
            />
          </Flex>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
