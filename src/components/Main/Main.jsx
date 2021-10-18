import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { GenerateInput } from "./GenerateInput";
import { GenerateCustomize } from "./GenerateCustomize";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

export const Main = () => {
  const toast = useToast();
  const password = useSelector((state) => state.generate.password);
  const boxShadowBox = useColorModeValue(
    "0px 6px 37px 9px rgba(34, 60, 80, 0.1)",
    "none"
  );
  const iconColor = useColorModeValue("#333", "#fff");
  const bgBox = useColorModeValue("#fff", "#2D3748");

  const copyToast = () => {
    toast({
      title: "Copied!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box as={"main"} flex={"1 1 auto"}>
      <Container py={"50px"}>
        <Flex maxW={"800px"} flexDirection={"column"} mx={"auto"}>
          <Box textAlign={"center"} mb={"35px"} textTransform={"uppercase"}>
            <Box
              fontSize={{ base: "12px", sm: "16px" }}
              mb={{ base: "5px", sm: "0" }}
            >
              password generator tool
            </Box>
            <Heading
              as={"h1"}
              fontWeight={"900"}
              fontSize={{ base: "18px", sm: "24px", md: "33px" }}
            >
              password generator online
            </Heading>
          </Box>
          <GenerateInput
            copy={copyToast}
            boxShadow={boxShadowBox}
            bg={bgBox}
            iconColor={iconColor}
          />
          <GenerateCustomize boxShadow={boxShadowBox} bg={bgBox} />
          <CopyToClipboard text={password}>
            <Button
              borderRadius={"30px"}
              w={"200px"}
              h={"50px"}
              fontSize={"18px"}
              colorScheme={"blue"}
              alignSelf={"center"}
              onClick={copyToast}
            >
              Copy password
            </Button>
          </CopyToClipboard>
        </Flex>
      </Container>
    </Box>
  );
};
