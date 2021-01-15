import customerEntity from "../entity/customerEntity";

export enum customerActionTypes {
  GET_CUSTOMER = "GET_CUSTOMER",
  GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS",
  GET_CUSTOMER_ERROR = "GET_CUSTOMER_ERROR",
  GET_CUSTOMER_BY_ID = "GET_CUSTOMER_BY_ID",
  GET_CUSTOMER_BY_ID_SUCCESS = "GET_CUSTOMER_BY_ID_SUCCESS",
  GET_CUSTOMER_BY_ID_ERROR = "GET_CUSTOMER_BY_ID_ERROR",
  ADD_CUSTOMER = "ADD_CUSTOMER",
  ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS",
  ADD_CUSTOMER_ERROR = "ADD_CUSTOMER_ERROR",
  DELETE_CUSTOMER = "DELETE_CUSTOMER",
  DELETE_CUSTOMER_SUCCESS = "DELETE_CUSTOMER_SUCCESS",
  DELETE_CUSTOMER_ERROR = "DELETE_CUSTOMER_ERROR",
}

export interface getCustomer {
  type: customerActionTypes.GET_CUSTOMER;
}
export interface getCustomerSuccess {
  type: customerActionTypes.GET_CUSTOMER_SUCCESS;
  customers: customerEntity[];
}

export interface getCustomerError {
  type: customerActionTypes.GET_CUSTOMER_ERROR;
  error: string;
}

export interface getCustomerById {
  type: customerActionTypes.GET_CUSTOMER_BY_ID;
  searchBy: string;
}
export interface getCustomerByIdSuccess {
  type: customerActionTypes.GET_CUSTOMER_BY_ID_SUCCESS;
  customers: customerEntity[];
}

export interface getCustomerByIdError {
  type: customerActionTypes.GET_CUSTOMER_BY_ID_ERROR;
  error: string;
}

export interface addCustomer {
  type: customerActionTypes.ADD_CUSTOMER;
}
export interface addCustomerSuccess {
  type: customerActionTypes.ADD_CUSTOMER_SUCCESS;
  message: string;
}

export interface addCustomerError {
  type: customerActionTypes.ADD_CUSTOMER_ERROR;
  error: string;
}

export interface deleteCustomer {
  type: customerActionTypes.DELETE_CUSTOMER;
}
export interface deleteCustomerSuccess {
  type: customerActionTypes.DELETE_CUSTOMER_ERROR;
  message: string;
}

export interface deleteCustomerError {
  type: customerActionTypes.DELETE_CUSTOMER_ERROR;
  error: string;
}

export type customerQueryAction =
  | getCustomer
  | getCustomerSuccess
  | getCustomerError
  | getCustomerById
  | getCustomerByIdSuccess
  | getCustomerByIdError;

export type customerCommandAction =
  | addCustomer
  | addCustomerSuccess
  | addCustomerError
  | deleteCustomer
  | deleteCustomerSuccess
  | deleteCustomerError;
