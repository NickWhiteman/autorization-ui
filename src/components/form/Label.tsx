import { LabelType } from "./types";

export const Label: React.FC<LabelType> = (props) => {
  const {children} = props;
  return (
    <label {...props} className='label-field'>{children}</label>
  )
};