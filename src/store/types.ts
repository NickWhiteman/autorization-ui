import { IFormProps } from "../components/form-wrapper/types"

export type User = {
  login: string
  password: string
}

export type TypeForm = Pick<IFormProps, 'type'>
export interface IAuthState {
  users: User[]
  authUser: User
  typeForm: TypeForm
}
