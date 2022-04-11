import { IUpdateForm } from "../components/form/types"

export type User = {
  login: string
  password: string
}

export type TypeForm = {
  type: 'update' | 'singUp' | 'singIn'
}
export interface IAuthState {
  users: (User | undefined)[]
  authUser: User
  typeForm: TypeForm
  error: string | undefined
  newPassword: IUpdateForm | undefined
  isOpenLogin: boolean
}
