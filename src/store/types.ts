export type User = {
  login: string
  password: string
}

export type TypeForm = {
  type: 'update' | 'singUp' | 'singIn'
}
export interface IAuthState {
  users: User[]
  authUser: User
  typeForm: TypeForm
}
