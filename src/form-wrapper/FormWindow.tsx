import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";

import { LogInForm } from "./logIn/LogInForm";
import { selectAuthUser, selectTypeForm } from "../store/selectors";
import { SingUpForm } from "./singUp/SingUpForm";
import { UpdateForm } from "./update/UpdateForm";


export const FormWindow: React.FC = () => {
  const dispatch = useDispatch();
  const typeForm = useSelector(selectTypeForm);
  const authUser = useSelector(selectAuthUser)

  const mode = {
    singIn: 'singIn',
    singUp: 'singUp',
    update: 'update'
  };

  const singIn = (
    <>
      <div className="body__header">
        <div className="header__name">Log In</div>
      </div>
      <div className="body__content">
        <LogInForm />
      </div>
    </>
  );

  const singUp = (
    <>
      <div className="body__header">
        <div className="header__name">Sing Up</div>
      </div>
      <div className="body__content">
        <SingUpForm />
      </div>
    </>
  );

  const update = (
    <>
      <div className="body__header">
        <div className="header__name">Update</div>
      </div>
      <div className="body__content">
        <UpdateForm />
      </div>
    </>
  );

  return (
    <div className={`body ${
      authUser.login && 
      typeForm === 'update' && 'update'}`
    }>
      {
        typeForm === mode.singIn && (
          singIn
        )
      }
      {
        typeForm === mode.singUp && (
          singUp
        )
      }
      {
        typeForm === mode.update && (
          update
        )
      }
    </div>
  );
};
