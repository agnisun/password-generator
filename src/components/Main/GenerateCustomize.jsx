import React, {useState} from 'react';
import {
  Box, Button,
  Checkbox,
  Flex,
  Heading,
  Input, Radio, RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack, Stack
} from "@chakra-ui/react";

export const GenerateCustomize = () => {
  const [valueRadio, setValueRadio] = useState("1")
  const [valueSlider, setValueSlider] = useState(12)
  
  return (
    <Box mb={"30px"} alignSelf={"center"} position={"relative"} boxShadow={"0px 6px 37px 9px rgba(34, 60, 80, 0.1)"}
         p={"25px"} w={"100%"} border={"1px solid rgba(55, 55, 55, 0.1)"}>
      <Heading ass={"h3"} fontSize={"24px"} fontWeight={"700"} lineHeight={"45px"}
               mb={"25px"}
               borderBottom={"2px solid #edeef0"}>
        Customize your password</Heading>
      <Flex w={"100%"}>
        <Box w={"100%"} flexBasis={"50%"} pr={"30px"}>
          <Box mb={"15px"}>Password Length</Box>
          <Flex>
            <Input mr={"30px"} textAlign={"center"} lineHeight={"1"} fontSize={"16px"} p={"5px"} px={"0"} w={"60px"}
                   h={"40px"} value={valueSlider}/>
            <Slider max={"30"}  aria-label="Change length" defaultValue={12} onChange={e => setValueSlider(e)}>
              <SliderTrack>
                <SliderFilledTrack/>
              </SliderTrack>
              <SliderThumb/>
            </Slider>
          </Flex>
        </Box>
        
        <Flex w={"100%"} flexBasis={"50%"}>
          <RadioGroup onChange={setValueRadio} value={valueRadio} flexBasis={"50%"}>
            <Stack direction="column">
              <Radio size={"lg"} value="1">Easy to say</Radio>
              <Radio size={"lg"} value="2">Easy to read</Radio>
              <Radio size={"lg"} value="3">All characters</Radio>
            </Stack>
          </RadioGroup>
          
          <Stack direction="column" flexBasis={"50%"}>
            <Checkbox size={"lg"} defaultIsChecked>
              Lowercase
            </Checkbox>
            <Checkbox size={"lg"}>
              Uppercase
            </Checkbox>
            <Checkbox size={"lg"}>
              Numbers
            </Checkbox>
            <Checkbox size={"lg"}>
              Symbols
            </Checkbox>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};