import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
import App from "./components/App";
import { userLoggedIn } from "./actions/auth";

if (localStorage.testAppJWT) {
  const user = { token: localStorage.testAppJWT };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
