import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUpdateForm } from "../components/form/types";

import { 
  IAuthState,
  TypeForm, 
  User 
} from "./types";

const STORE_NAME = '@authorization';

const initialState: IAuthState = {
  users: [],
  authUser: {
    login: '', 
    password: ''
  },
  typeForm: {
    type: 'singIn'
  },
  isOpenLogin: true,
  error: undefined,
  newPassword: undefined
};

export const AuthReducer = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    singIn(state, {payload}: PayloadAction<User>) {
      state.authUser = payload;
    },
    singUp(state, {payload}: PayloadAction<User>) {
      state.users.push(payload);
    },
    updateUser(state, {payload}: PayloadAction<(User | undefined)[]>) {
      state.users = payload; 
    },
    newPassword(state, {payload}: PayloadAction<IUpdateForm>) {
      state.newPassword = payload
    },
    typeForm(state, {payload}: PayloadAction<TypeForm>) {
      state.typeForm = payload;
    },
    isOpenLogIn(state) {
      state.isOpenLogin = !state.isOpenLogin
    },
    errorAuth(state, {payload}: PayloadAction<string>) {
      state.error = payload
    }
  }
});

export const authAction = {
  ...AuthReducer.actions
};

export const authReducer = AuthReducer.reducer;