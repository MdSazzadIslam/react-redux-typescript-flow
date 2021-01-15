import { AxiosResponse } from "axios";
import http from "../config/index";
import customerEntity from "../entity/customerEntity";

export default class customerService {
  getCustomers(): Promise<AxiosResponse<customerEntity>> {
    return http.get<customerEntity>(`${http}/customer`);
  }

  getCustomersById(searchBy: string): Promise<AxiosResponse<customerEntity>> {
    return http.get<customerEntity>(`${http}/customer/${searchBy}`);
  }

  addCustomer(
    customer: customerEntity
  ): Promise<AxiosResponse<customerEntity>> {
    return http.post<customerEntity>(`${http}/customer/`);
  }

  deleteCustomer(searchBy: string): Promise<AxiosResponse<customerEntity>> {
    return http.delete<customerEntity>(`${http}/customer/${searchBy}`);
  }
}
