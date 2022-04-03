import { FormType } from "./types";

export const Form: React.FC<FormType> = ({
  children,
  onSubmit,
  className,
  props
}) => {

  return (
    <form {...props} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
