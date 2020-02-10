import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middleware = applyMiddleware(thunk);

export default createStore(
  rootReducer,
  composeWithDevTools(middleware)
);
