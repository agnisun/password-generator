import React from 'react';
import {Box, Container, Text} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box as={"footer"}>
      <Container>
        <Text py={"30px"} textAlign={"center"} fontSize={"13px"} fontWeight={"300"}>CopyRight <Box ml={"5px"} as={"span"}>&#169; 2021</Box></Text>
      </Container>
    </Box>
  );
};