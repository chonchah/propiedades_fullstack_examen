import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { propertyReducer } from "./reducers";

export default createStore(
  combineReducers({ propertyReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
