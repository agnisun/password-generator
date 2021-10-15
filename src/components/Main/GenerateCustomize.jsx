import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckboxArr,
  setPasswordLength,
  setRadio,
} from "../../features/generateSlice";

export const GenerateCustomize = () => {
  const [valueRadio, setValueRadio] = useState("1");
  const passwordLength = useSelector((state) => state.generate.passwordLength);
  const checkboxArr = useSelector((state) => state.generate.checkbox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRadio(valueRadio));
  }, [valueRadio, dispatch]);

  return (
    <Box
      mb={"30px"}
      alignSelf={"center"}
      position={"relative"}
      boxShadow={"0px 6px 37px 9px rgba(34, 60, 80, 0.1)"}
      p={"25px"}
      w={"100%"}
      border={"1px solid rgba(55, 55, 55, 0.1)"}
    >
      <Heading
        ass={"h3"}
        fontSize={"24px"}
        fontWeight={"700"}
        lineHeight={"45px"}
        mb={"25px"}
        borderBottom={"2px solid #edeef0"}
      >
        Customize your password
      </Heading>
      <Flex w={"100%"}>
        <Box w={"100%"} flexBasis={"50%"} pr={"30px"}>
          <Box mb={"15px"}>Password Length</Box>
          <Flex>
            <Input
              mr={"30px"}
              textAlign={"center"}
              lineHeight={"1"}
              fontSize={"16px"}
              p={"5px"}
              px={"0"}
              w={"60px"}
              h={"40px"}
              value={passwordLength}
            />
            <Slider
              max={"30"}
              aria-label="Change length"
              defaultValue={passwordLength}
              onChange={(e) => dispatch(setPasswordLength(e))}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
        </Box>

        <Flex w={"100%"} flexBasis={"50%"}>
          <RadioGroup
            onChange={setValueRadio}
            value={valueRadio}
            flexBasis={"50%"}
          >
            <Stack direction="column">
              <Radio size={"lg"} value="1">
                Easy to say
              </Radio>
              <Radio size={"lg"} value="2">
                Easy to read
              </Radio>
              <Radio size={"lg"} value="3">
                All characters
              </Radio>
            </Stack>
          </RadioGroup>

          <CheckboxGroup
            colorScheme="blue"
            defaultValue={checkboxArr}
            flexBasis={"50%"}
            onChange={(e) => dispatch(setCheckboxArr(e))}
          >
            <Stack direction={"column"}>
              <Checkbox size={"lg"} value="lowercase">
                Lowercase
              </Checkbox>
              <Checkbox size={"lg"} value="uppercase">
                Uppercase
              </Checkbox>
              <Checkbox size={"lg"} value="numbers">
                Numbers
              </Checkbox>
              <Checkbox size={"lg"} value="symbols">
                Symbols
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Flex>
      </Flex>
    </Box>
  );
};
