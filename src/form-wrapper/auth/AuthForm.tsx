import "./style/style.css";
import React from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export const AuthForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {

  }, []);

  
  return (
    <>   
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='login'>Login</label>
        <input placeholder='enter login' {...register("example")} />
        <label htmlFor='password'>Password</label>
        <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" onClick={() => {console.log('РАБОТАЕТ onClick :)')}} />
    </form>
    </>
  );
};
