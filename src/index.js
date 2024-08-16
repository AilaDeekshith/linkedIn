import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./i18nextInit";
import { Provider } from "react-redux";
import store from './Components/store/store'
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
      <App />
    </Provider>,
);