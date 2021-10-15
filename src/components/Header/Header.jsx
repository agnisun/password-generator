import React from 'react';
import {Box, Container, Flex, Image} from "@chakra-ui/react";
import {ColorModeSwitcher} from "./ColorModeSwitcher";
import logo from "../../img/logo.svg"

export const Header = () => {
  
  return (
    <Box as={"header"} bg={"#3182ce"} color={"#000"}>
      <Container py={"25px"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex alignItems={"center"}>
            <Image src={logo} mr={"25px"}/>
          </Flex>
          <ColorModeSwitcher/>
        </Flex>
      </Container>
    </Box>
  );
};