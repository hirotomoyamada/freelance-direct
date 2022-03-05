import { Company } from "types/post";
import { User } from "types/user";

export interface State {
  user: User | unknown;
  selectUser: Company | unknown;
}

export const initialState: State = {
  user: {},

  selectUser: {},
};
