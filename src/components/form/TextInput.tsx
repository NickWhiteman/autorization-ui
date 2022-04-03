import React from "react";
import { TextInputType } from "./types";

export const TextInput: React.FC<TextInputType> = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} className="text-input"></input>
  )
});