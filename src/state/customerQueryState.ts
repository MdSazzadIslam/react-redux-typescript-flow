import customerEntity from "../entity/customerEntity";

export default interface customerQueryState {
  customers: customerEntity[];
  isFetching: boolean;
  error?: string;
}
