import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import tasks from "./reducers";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore(tasks, composeWithDevTools());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
