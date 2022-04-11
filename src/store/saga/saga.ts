import { createAction } from "@reduxjs/toolkit";
import { put, all, call, takeLatest, select } from "redux-saga/effects";
import { IUpdateForm } from "../../components/form/types";
import { authAction } from "../reducer";
import {
  selectAuthUser,
  selectUpdatePassword,
  selectUsers,
} from "../selectors";
import { User } from "../types";
/*
 *   actions saga
 */
const SING_IN_ACTION = "SING_IN_ACTION";
const SING_UP_ACTION = "SING_UP_ACTION";
const UPDATE_ACTION = "UPDATE_ACTION";

export const sagaActions = {
  singIn: createAction(SING_IN_ACTION),
  singUp: createAction(SING_UP_ACTION),
  update: createAction<IUpdateForm>(UPDATE_ACTION),
};

/*
 *   workers saga
 */
export function* singInWorker() {
  const userEnter: User = yield select(selectAuthUser);
  const listUser: User[] = yield select(selectUsers);
  const searchUser: User[] = listUser.filter(
    (user: User) =>
      user.login === userEnter.login && user.password === userEnter.password
  );
  searchUser
    ? put(authAction.isOpenLogIn())
    : put(authAction.errorAuth("Error user not exist"));
}

export function* singUpWorker() {
  const userSingUp: User = yield select(selectAuthUser);
  userSingUp && put(authAction.singUp(userSingUp));
  //Уведомление об успехе
}

export function* updateWorker(payload: IUpdateForm) {
  const userAuth: User = yield select(selectAuthUser);
  const {oldPassword, newPassword}: IUpdateForm = payload;
  const listUser: User[] = yield select(selectUsers);
  const updateUsers: (User | undefined)[] = [
    ...listUser.map((user: User) => {
      if ( user.login !== userAuth.login ) {
        return user;
      }
      if ( user.password === oldPassword ) {
        return {
          login: user.login,
          password: newPassword,
        } as User;
      }
    })
  ];
  updateUsers && put(authAction.updateUser(updateUsers));
};
