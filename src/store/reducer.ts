import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthState, User } from "./types";

const STORE_NAME = '@authorization';

const initialState: IAuthState = {
  users: [],
  authUser: {login: '', password: ''},
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
      state.users = state.users.map((user: User) => {
        if ( user.login === payload.login ) return payload
        return user;
      }); 
    }
  }
});

export const authAction = {
  ...AuthReducer.actions
};

export const authReducer = AuthReducer.reducer;