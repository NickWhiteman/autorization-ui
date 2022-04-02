import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  } 
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
        /* 
        * Я осведомлен что так делать нельзя, но я не хочу реализовывать полноценный сервис авторизации на NodeJS
        */
        if ( user.login === payload.login ) return payload
        return user;
      }); 
    },
    typeForm(state, {payload}: PayloadAction<TypeForm>) {
      state.typeForm = payload;
    }
  }
});

export const authAction = {
  ...AuthReducer.actions
};

export const authReducer = AuthReducer.reducer;