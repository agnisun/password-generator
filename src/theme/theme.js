import { extendTheme } from "@chakra-ui/react";
import Container from "./components/Container";
import styles from "./styles";
import Heading from "./components/Heading";

export const theme = extendTheme({
  styles,
  components: {
    Container,
    Heading,
  },
});
