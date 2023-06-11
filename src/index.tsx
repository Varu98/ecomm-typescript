import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductsProvider } from "./contexts/ProductListingContext";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
