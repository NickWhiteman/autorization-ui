import "./style/style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { Form } from "../../components/form/Form";
import { Button } from "../../components/button/Button";
import { Label } from "../../components/form/Label";
import { TextInput } from "../../components/form/TextInput";
import { User } from "../../store/types";
import { loginOptions, passwordOptions } from "../../components/form/validateRules";
import { ErrorWrapper } from "../../components/form/ErrorWrapper";
import { authAction } from "../../store/reducer";

export const LogInForm: React.FC = () => {
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm<User>();

  const onSubmit = (data: User) => dispatch(authAction.singIn(data));

  return (
    <Form 
      onSubmit={handleSubmit(onSubmit)} 
      className={'form'}>
        <>
          <Label htmlFor='login' children={'Login'} />
          <TextInput type="text" {...register('login', {...loginOptions})} />
            {
              errors.login && 
                <ErrorWrapper children={errors.login.message } />
            }
          <Label htmlFor='password' children={'Password'} />
          <TextInput type="text" {...register('password', {...passwordOptions})} />
            {
              errors.password && 
                <ErrorWrapper children={errors.password.message} />
            }
          <div className="footer">
            <Button
              mode='button-primary'
              type='submit'
              onClick={() => { console.log('РАБОТАЕТ onClick :)'); } }
              children={'Log in'} />
          </div>
        </>
    </Form>
  );
};
