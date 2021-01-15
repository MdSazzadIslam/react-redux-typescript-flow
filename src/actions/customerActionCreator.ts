import { Dispatch } from "redux";
import customerEntity from "../entity/customerEntity";
import customerService from "../services/customerService";

import {
  getCustomer,
  getCustomerSuccess,
  getCustomerError,
  getCustomerById,
  getCustomerByIdSuccess,
  getCustomerByIdError,
  customerActionTypes,
  addCustomer,
  addCustomerSuccess,
  addCustomerError,
} from "./customerAction";

export const geCustomers = () => {
  return (dispatch: Dispatch) => {
    dispatch(getCustomerRecord());
    return new customerService()
      .getCustomers()
      .then((response) =>
        dispatch(getCustomerRecordSuccess(response.data.customers))
      )
      .catch((error) =>
        dispatch(
          getCustomerRecordError("Customer fetching error: " + error.message)
        )
      );
  };
};

export const getCustomerRecord = (): getCustomer => {
  return {
    type: customerActionTypes.GET_CUSTOMER,
  };
};

export const getCustomerRecordSuccess = (
  results: customerEntity[]
): getCustomerSuccess => {
  return {
    type: customerActionTypes.GET_CUSTOMER_SUCCESS,
    customers: results,
  };
};

export const getCustomerRecordError = (error: string): getCustomerError => {
  return {
    type: customerActionTypes.GET_CUSTOMER_ERROR,
    error: error,
  };
};

export const getCustomersById = (searchBy: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getCustomerRecordById(searchBy));
    return new customerService()
      .getCustomersById(searchBy)
      .then((response) =>
        dispatch(getCustomerRecordByIdSuccess(response.data.customers))
      )
      .catch((error) =>
        dispatch(
          getCustomerRecordByIdError(
            "Customer fetching error: " + error.message
          )
        )
      );
  };
};

export const getCustomerRecordById = (searchBy: string): getCustomerById => {
  return {
    type: customerActionTypes.GET_CUSTOMER_BY_ID,
    searchBy: searchBy,
  };
};

export const getCustomerRecordByIdSuccess = (
  results: customerEntity[]
): getCustomerByIdSuccess => {
  return {
    type: customerActionTypes.GET_CUSTOMER_BY_ID_SUCCESS,
    customers: results,
  };
};

export const getCustomerRecordByIdError = (
  error: string
): getCustomerByIdError => {
  return {
    type: customerActionTypes.GET_CUSTOMER_BY_ID_ERROR,
    error: error,
  };
};

export const addCustomers = (customer: customerEntity) => {
  return (dispatch: Dispatch) => {
    dispatch(addCustomerRecord());
    return new customerService()
      .addCustomer(customer)
      .then((response) => dispatch(addCustomerRecordSuccess(response.data)))
      .catch((error) =>
        dispatch(
          addCustomerRecordError("Adding customer error: " + error.message)
        )
      );
  };
};

export const addCustomerRecord = (): addCustomer => {
  return {
    type: customerActionTypes.ADD_CUSTOMER,
  };
};

export const addCustomerRecordSuccess = (message: any): addCustomerSuccess => {
  return {
    type: customerActionTypes.ADD_CUSTOMER_SUCCESS,
    message: message,
  };
};

export const addCustomerRecordError = (error: string): addCustomerError => {
  return {
    type: customerActionTypes.ADD_CUSTOMER_ERROR,
    error: error,
  };
};
