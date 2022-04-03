import "./style/style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { Form } from "../../components/form/Form";
import { Button } from "../../components/button/Button";
import { Label } from "../../components/form/Label";
import { TextInput } from "../../components/form/TextInput";
import { IUpdateForm } from "../../components/form/types";
import { User } from "../../store/types";

export const UpdateForm: React.FC = () => {
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm<IUpdateForm>();

  const onSubmit = (data: IUpdateForm) => console.log(data);

  return (
    <Form 
      onSubmit={handleSubmit(onSubmit)} 
      className={'form'}>
        <>
          <Label htmlFor='oldPassword' children={'Old password'}/>
          <TextInput type="text" {...register('oldPassword')} />
          <Label htmlFor='newPassword' children={'New password'}/>
          <TextInput type="text" {...register('newPassword')} />
          <Label htmlFor='newPassword' children={'Confirm password'}/>
          <TextInput type="text" {...register('confirmPassword')} />
          <div className="footer">
            <Button
              mode='button-primary'
              type='submit'
              onClick={() => { console.log('РАБОТАЕТ onClick :)'); } }
              children={'Save'}/>
          </div>
        </>
    </Form>
  );
};
