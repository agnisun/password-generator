import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { GenerateIcon } from "../../theme/icons/GenerateIcon";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import {GeneratePassword} from "../../core/GeneratePassword";

export const GenerateInput = ({ copy, bg, boxShadow, iconColor }) => {
  const [reliabilityColor, setReliabilityColor] = useState("");
  const password = useSelector((state) => state.generate.password);
  const passwordLength = useSelector((state) => state.generate.length);
  const strategies = useSelector((state) => state.generate.strategies);
  const dispatch = useDispatch();

  const reliabilityPassword = () => {
    if (passwordLength >= 9) {
      setReliabilityColor("green");
    } else if (passwordLength >= 5 && passwordLength < 9) {
      setReliabilityColor("orange");
    } else {
      setReliabilityColor("red");
    }
  };

  useEffect(() => {
    reliabilityPassword();
    GeneratePassword(strategies, passwordLength, dispatch);
  }, [passwordLength, strategies]);

  return (
    <Box
      bg={bg}
      mb={"30px"}
      alignSelf={"center"}
      position={"relative"}
      boxShadow={boxShadow}
      p={{ base: "8px", lg: "25px" }}
      height={{ base: "80px", lg: "115px" }}
      w={"100%"}
      border={"1px solid rgba(55, 55, 55, 0.1)"}
    >
      <InputGroup h={"100%"}>
        <Input
          fontSize={{ base: "22px", md: "33px" }}
          fontWeight={700}
          border={"0"}
          h={"100%"}
          p={"8px 110px 8px 10px"}
          _focus={{ outline: 0 }}
          value={password}
        />
        <CopyToClipboard text={password}>
          <InputRightElement
            top={"50%"}
            transform={"translateY(-50%)"}
            right={"55px"}
            children={
              <IconButton
                onClick={copy}
                size={"lg"}
                icon={<CopyIcon color={iconColor} />}
                aria-label={"Copy"}
              />
            }
          />
        </CopyToClipboard>
        <InputRightElement
          top={"50%"}
          transform={"translateY(-50%)"}
          children={
            <IconButton
              onClick={() => GeneratePassword(strategies, passwordLength, dispatch)}
              size={"lg"}
              icon={<GenerateIcon fill={iconColor} />}
              aria-label={"Copy"}
            />
          }
        />
      </InputGroup>
      <Box
        position={"absolute"}
        left={"0"}
        bottom={"0"}
        w={"100%"}
        h={"7px"}
        transition={"background .2s ease-in-out"}
        bgColor={reliabilityColor}
      />
    </Box>
  );
};
