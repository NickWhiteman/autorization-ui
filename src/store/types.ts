export type User = {
  login: string
  password: string
}

export interface IAuthState {
  users: User[]
  authUser: User
}
