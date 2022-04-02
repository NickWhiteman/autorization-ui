import { 
  REGISTER_USER,
  SING_IN, 
  SING_UP, 
  UPDATE_PASSWORD 
} from "./action-type";
import { User } from "./types";

export type AuthActions =
  | ReturnType<typeof singUpActions>
  | ReturnType<typeof singInActions>
  | ReturnType<typeof updatePasswordActions>
  | ReturnType<typeof registerUsersActions>

export const singUpActions = (user: User) =>
  ({
    type: SING_UP,
    payload: user,
  } as const);

  export const singInActions = (user: User) =>
  ({
    type: SING_IN,
    payload: user,
  } as const);

  export const updatePasswordActions = (user: User) =>
  ({
    type: UPDATE_PASSWORD,
    payload: user,
  } as const);

  export const registerUsersActions = (users: User[]) =>
  ({
    type: REGISTER_USER,
    payload: users,
  } as const)
