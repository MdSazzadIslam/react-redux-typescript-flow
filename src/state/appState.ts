import customerQueryState from "./customerQueryState";
import customerCommandState from "./customerCommandState";

export default interface appState {
  customerQueryState: customerQueryState;
  customerCommandState: customerCommandState;
}
