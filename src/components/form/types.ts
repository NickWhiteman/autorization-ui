import { ReactNode, Ref } from "react";

export type Props = {
  [key: string]: string | number | JSX.Element
}

type T = any

export interface TextInputType  {
  children?: ReactNode
  props?: Props
  type: string
  ref: Ref<T>
};

export type FormType = {
  children: JSX.Element
  onSubmit: () => void
  className?: string
  props?: Props
};

export type LabelType = {
  children: string
  htmlFor: string
}

export interface IUpdateForm {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}
