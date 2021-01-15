import { Reducer } from "redux";
import customerQueryState from "../state/customerQueryState";
import {
  customerActionTypes,
  customerQueryAction,
} from "../actions/customerAction";

const initialState: customerQueryState = {
  customers: [],
  isFetching: false,
};

const customerQueryReducer: Reducer<customerQueryState, customerQueryAction> = (
  state = initialState,
  action: customerQueryAction
) => {
  switch (action.type) {
    case customerActionTypes.GET_CUSTOMER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case customerActionTypes.GET_CUSTOMER_SUCCESS: {
      return {
        ...state,
        customers: action.customers,
        isFetching: false,
      };
    }
    case customerActionTypes.GET_CUSTOMER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case customerActionTypes.GET_CUSTOMER_BY_ID: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case customerActionTypes.GET_CUSTOMER_BY_ID_SUCCESS: {
      return {
        ...state,
        customers: action.customers,
        isFetching: false,
      };
    }
    case customerActionTypes.GET_CUSTOMER_BY_ID_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default customerQueryReducer;
