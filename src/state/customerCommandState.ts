import { defaultCipherList } from "constants";

export default interface customerCommandState {
  message: string;
  isSaving: boolean;
  error?: string;
}
