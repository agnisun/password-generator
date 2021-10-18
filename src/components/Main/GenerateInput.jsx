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
import { setPassword } from "../../features/generateSlice";

export const GenerateInput = ({ copy, bg, boxShadow, iconColor }) => {
  const [reliabilityColor, setReliabilityColor] = useState("grey");
  const password = useSelector((state) => state.generate.password);
  const passwordLength = useSelector((state) => state.generate.length);
  const strategies = useSelector((state) => state.generate.strategies);
  const dispatch = useDispatch();

  const generatePassword = () => {
    const charsLower = {
      value: "abcdefghijklmnopqrstuvwxyz",
      status: false,
    };
    const charsUpper = {
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      status: false,
    };
    const symbols = {
      value: "+-_=/;><)(*&^%$#@!,.?|{}[]",
      status: false,
    };
    const numbers = {
      value: "0123456789",
      status: false,
    };
    const password = [];

    for (let strategy of strategies) {
      if (strategy === "lowercase") {
        charsLower.status = true;
      } else if (strategy === "uppercase") {
        charsUpper.status = true;
      } else if (strategy === "symbols") {
        symbols.status = true;
      } else if (strategy === "numbers") {
        numbers.status = true;
      }
    }

    for (let i = 0; i < passwordLength; i++) {
      const lowerChar = charsLower.status
        ? shuffleLetters(charsLower.value).slice(0, 10)
        : "";
      const upperChar = charsUpper.status
        ? shuffleLetters(charsUpper.value).slice(0, 5)
        : "";
      const symbolChar = symbols.status
        ? shuffleLetters(symbols.value).slice(0, 5)
        : "";
      const numberChar = numbers.status
        ? shuffleLetters(numbers.value).slice(0, 5)
        : "";
      const resultChars = shuffleLetters(
        lowerChar + upperChar + symbolChar + numberChar
      )[0];
      password.push(resultChars);
    }

    function shuffleLetters(str) {
      let a = str.split(""),
        n = a.length;

      for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }

      return a.join("");
    }

    dispatch(setPassword(password.join("")));
  };

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
    generatePassword();
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
              onClick={generatePassword}
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
