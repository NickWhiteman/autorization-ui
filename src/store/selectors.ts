import { IRootState } from ".";

export const selectTypeForm = (state: IRootState) => 
  state.AuthStore.typeForm.type;

export const selectAuthUser = (state: IRootState) => 
  state.AuthStore.authUser;

export const selectUsers = (state: IRootState) => 
  state.AuthStore.users;

export const selectUpdatePassword = (state: IRootState) => 
  state.AuthStore.newPassword;

export const selectIsOpenLogin = (state: IRootState) =>
  state.AuthStore.isOpenLogin;
