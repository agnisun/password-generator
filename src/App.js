import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex flexDirection={"column"} minH={"100vh"}>
      <Header />
      <Main />
      <Footer />
    </Flex>
  );
}

export default App;
