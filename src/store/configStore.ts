import { applyMiddleware, createStore, Store, AnyAction } from "redux";
import thunk from "redux-thunk";
import appState from "../state/appState";
import rootReducer from "../reducers";
import logger from "redux-logger";

export default function configStore(): Store<appState, AnyAction> {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}
