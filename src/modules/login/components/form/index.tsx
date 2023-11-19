'use client';

/* eslint-disable react/function-component-definition */
import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import joi from '@hapi/joi';
import InputButton from '../../../../common/components/Button/InputButton';

type Props = {
  form:{
    emailLabel:string
    passwordLabel:string
    signButton:string
  }
};
type FormValues = {
  name: string;
  email: string;
  password:string,
};

const schema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export default function LoginForm(props:Props) {
  const { form } = props;
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(schema) });
  const onSubmit = handleSubmit((data) => {
    reset();
    // console.log(data);
  });

  return (
    <form className=" bg-white p-4 w-full gap-4 flex flex-col" onSubmit={onSubmit}>
      <input className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('email')} placeholder={form.emailLabel} />
      <input type="password" className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('password')} placeholder={form.passwordLabel} />
      {errors?.email && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.email.message}</p>}
      {errors?.password && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.password.message}</p>}
      <InputButton />

    </form>
  );
}
