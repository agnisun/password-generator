import React from 'react';
import {Box, IconButton, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {CopyIcon} from "@chakra-ui/icons";
import {GenerateIcon} from "../../theme/icons/GenerateIcon";

export const GenerateInput = () => {
  return (
    <Box mb={"30px"} alignSelf={"center"} position={"relative"} boxShadow={"0px 6px 37px 9px rgba(34, 60, 80, 0.1)"} p={"25px"} height={"115px"}
         w={"100%"} border={"1px solid rgba(55, 55, 55, 0.1)"}>
      <InputGroup>
        <Input fontSize={"33px"} fontWeight={700} border={"0"} h={"100%"} p={"8px 110px 8px 10px"} _focus={{outline: 0}}
               value={"4#QupE6TCvR$y&nrtnH*#Fc"}/>
        <InputRightElement top={"50%"} transform={"translateY(-50%)"} right={"55px"} children={<IconButton size={"lg"} icon={<CopyIcon/>} aria-label={"Copy"}/>}/>
        <InputRightElement top={"50%"} transform={"translateY(-50%)"} children={<IconButton size={"lg"} icon={<GenerateIcon/>} aria-label={"Copy"}/>}/>
      </InputGroup>
      <Box position={"absolute"} left={"0"} bottom={"0"} w={"100%"} h={"7px"}
           transition={"background .2s ease-in-out"} bgColor={"green"}></Box>
    </Box>
  );
};