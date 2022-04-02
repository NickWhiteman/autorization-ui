import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";

import { IFormProps } from "./types";
// import { selectIsDeleteMode } from "../../store/selectors";
import { AuthForm } from "./auth/AuthForm";


export const FormWindow: React.FC<IFormProps> = ({ type }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="modal__body">
        <div className="body__header">
          <div className="header__name">
            {type === 'singIn' && 'Sing In'}
            {type === 'singUp' && 'Sing Up'}
            {type === 'update' && 'New password'}
          </div>
        </div>
        <div className="body__content">
          {type === 'singIn' && <AuthForm />}
          {type === 'singUp' && <AuthForm />}
          {type === 'update' && <AuthForm />}
        </div>
      </div>
    </>
  );
};
