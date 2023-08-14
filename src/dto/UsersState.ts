import { User } from "./User";

export interface UsersState {
  data: Array<User>;
  loading: boolean;
  error: Error | null;
}
