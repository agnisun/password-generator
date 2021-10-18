import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Flex, useColorModeValue } from "@chakra-ui/react";

function App() {
  const color = useColorModeValue("#333", "#fff");

  return (
    <Flex flexDirection={"column"} minH={"100vh"} color={color}>
      <Header />
      <Main />
      <Footer />
    </Flex>
  );
}

export default App;
