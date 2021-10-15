import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { config } from "./theme/config";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import generateReducer from "./features/generateSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    generate: generateReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
