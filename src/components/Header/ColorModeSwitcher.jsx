import React from 'react';
import {Box, IconButton, useColorMode} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from '@chakra-ui/icons';

export const ColorModeSwitcher = () => {
  
  const {colorMode, toggleColorMode} = useColorMode();
  
  return (
    <Box bgColor={"#fff"} borderRadius={"50%"}>
      <IconButton
        isRound={"true"}
        color={"#333"}
        icon={colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}
        size='lg'
        onClick={toggleColorMode}
        aria-label={"Change theme"}/>
    </Box>
  );
};