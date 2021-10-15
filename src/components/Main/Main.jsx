import React from 'react';
import {Box, Button, Container, Flex, Heading} from "@chakra-ui/react";
import {GenerateInput} from "./GenerateInput";
import {GenerateCustomize} from "./GenerateCustomize";

export const Main = () => {
  return (
    <Box as={"main"} flex={"1 1 auto"}>
      <Container py={"50px"}>
        <Flex maxW={"800px"} flexDirection={"column"} mx={"auto"}>
          <Box textAlign={"center"} mb={"35px"} textTransform={"uppercase"}>
            <Box fontSize={"16px"} mb={"20px"} fontWeight={"700"}>password generator tool</Box>
            <Heading as={"h1"} fontWeight={"900"}>password generator online</Heading>
          </Box>
          <GenerateInput/>
          <GenerateCustomize/>
          <Button borderRadius={"30px"} w={"200px"} h={"50px"} fontSize={"18px"} colorScheme={"blue"} alignSelf={"center"}>Copy password</Button>
        </Flex>
      </Container>
    </Box>
  );
};