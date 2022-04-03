import { ReactNode } from "react"
import { Props } from "../form/types"

export interface IButtonProps {
  mode: 'button-close' | 'button-primary' | 'button-link'
  type?: 'button' | 'submit' | 'reset' 
  link?: string
  children: string | HTMLElement | JSX.Element
  onClick?: () => void | ((id: number) => void)
};