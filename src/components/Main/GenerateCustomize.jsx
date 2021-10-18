import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStrategies,
  setPasswordLength,
} from "../../features/generateSlice";

export const GenerateCustomize = ({ bg, boxShadow }) => {
  const passwordLength = useSelector((state) => state.generate.length);
  const strategies = useSelector((state) => state.generate.strategies);
  const dispatch = useDispatch();

  return (
    <Box
      bg={bg}
      mb={"30px"}
      alignSelf={"center"}
      position={"relative"}
      boxShadow={boxShadow}
      p={"25px"}
      w={"100%"}
      border={"1px solid rgba(55, 55, 55, 0.1)"}
    >
      <Heading
        ass={"h3"}
        fontSize={{ base: "18px", sm: "24px" }}
        fontWeight={"700"}
        lineHeight={"45px"}
        mb={"25px"}
        borderBottom={"2px solid #edeef0"}
      >
        Customize your password
      </Heading>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={"100%"} pr={"30px"} flexBasis={"75%"}>
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
              <SliderThumb boxSize={"20px"}>
                <Box
                  w={"20px"}
                  h={"100%"}
                  borderRadius={"50%"}
                  bgColor="#3182ce"
                />
              </SliderThumb>
            </Slider>
          </Flex>
        </Box>

        <Flex justifyContent={"flex-end"}>
          <CheckboxGroup
            colorScheme="blue"
            defaultValue={strategies}
            flexBasis={"50%"}
            onChange={(e) => dispatch(setStrategies(e))}
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
