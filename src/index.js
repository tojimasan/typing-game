import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { App } from "./App";
import { AppProvider } from "./providers/AppProvider";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>
);
