import { Reducer } from "redux";
import customerCommandState from "../state/customerCommandState";
import {
  customerActionTypes,
  customerCommandAction,
} from "../actions/customerAction";

const initialState: customerCommandState = {
  message: "",
  isSaving: false,
};

const customerCommandReducer: Reducer<
  customerCommandState,
  customerCommandAction
> = (state = initialState, action: customerCommandAction) => {
  switch (action.type) {
    case customerActionTypes.ADD_CUSTOMER: {
      return {
        ...state,
        isSaving: true,
      };
    }
    case customerActionTypes.ADD_CUSTOMER_SUCCESS: {
      return {
        ...state,
        message: action.message,
        isSaving: false,
      };
    }
    case customerActionTypes.ADD_CUSTOMER_ERROR: {
      return {
        ...state,
        isSaving: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default customerCommandReducer;
