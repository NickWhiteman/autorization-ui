import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";

import { AuthForm } from "./auth/AuthForm";
import { selectTypeForm } from "../store/selectors";


export const FormWindow: React.FC = () => {
  const dispatch = useDispatch();
  const typeForm = useSelector(selectTypeForm);
  const mode = {
    singIn: 'singIn',
    singUp: 'singUp',
    update: 'update'
  };

  const singIn = () => (
    <>
      <div className="body__header">
        <div className="header__name">Sing In</div>
      </div>
      <div className="body__content">
        <AuthForm />
      </div>
    </>
  );

  const singUp = () => (
    <>
      <div className="body__header">
        <div className="header__name">Sing Up</div>
      </div>
      <div className="body__content">
        <AuthForm />
      </div>
    </>
  );

  const update = () => (
    <>
      <div className="body__header">
        <div className="header__name">Update</div>
      </div>
      <div className="body__content">
        <AuthForm />
      </div>
    </>
  );

  return (
    <div className="modal__body">
      {
        typeForm === mode.singIn && (
          singIn()
        )
      }
      {
        typeForm === mode.singUp && (
          singUp()
        )
      }
      {
        typeForm === mode.update && (
          update()
        )
      }
    </div>
  );
};
