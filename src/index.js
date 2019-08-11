import React from "react";
import ReactDOM from "react-dom";
import App from "./app-common/components/app/app.container";
import {Provider} from "react-redux";
import store from "./app-common/store/index";

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById("root"));