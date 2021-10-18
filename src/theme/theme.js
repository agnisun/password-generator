import { extendTheme } from "@chakra-ui/react";
import Container from "./components/Container";
import styles from "./styles";
import Heading from "./components/Heading";
import config from "./config";
import { breakpoints } from "./breakpoints";

export const theme = extendTheme({
  styles,
  components: {
    Container,
    Heading,
  },
  config,
  breakpoints,
});
