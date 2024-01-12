import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Main from "./index";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
