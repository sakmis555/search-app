import React from "react";
import { Provider } from "react-redux";
// import { store } from "./src/redux/store";
import ContextProvider from "./src/context";
import Roootnavigator from "./src/navigation";

export default function App() {
  return (
    // <Provider>
    <ContextProvider>
      <Roootnavigator />
    </ContextProvider>
    // </Provider>
  );
}
