import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ROUTES } from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter(ROUTES);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <RouterProvider router={router}></RouterProvider>
  </ChakraProvider>
);
