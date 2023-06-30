import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import App from "./App.tsx";
import Theme from "./Theme.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
