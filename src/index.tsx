import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { Store } from "redux";
import appState from "./state/appState";
import configStore from "./store/configStore";
const store = configStore();

interface Props {
  store: Store<appState>;
}

const Root: React.FunctionComponent<Props> = (props) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
