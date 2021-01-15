import { combineReducers } from "redux";
import appState from "../state/appState";

import customerQueryReducer from "./customerQueryReducer";
import customerCommandReducer from "./customerCommandReducer";

const rootReducer = combineReducers<appState>({
  customerQueryState: customerQueryReducer,
  customerCommandState: customerCommandReducer,
});

export default rootReducer;
