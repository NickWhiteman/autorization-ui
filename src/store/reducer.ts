import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthState, User } from "./types";

const STORE_NAME = '@authorization';

const initialState: IAuthState = {
  users: [],
  authUser: {login: '', password: ''},
  updateUser: {login: '', password: ''},
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
    updateUser(state, {payload}: PayloadAction<User>) {
      state.users = state.users.filter(item => item.login === payload.login;
    }
  }
}

export const authAction = {
  ...AuthReducer.actions
};

export const authReducer = AuthReducer.reducer;