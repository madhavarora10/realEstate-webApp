'use client';

/* eslint-disable react/function-component-definition */
import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import joi from '@hapi/joi';
import InputButton from '../../../../common/components/Button/InputButton';

type FormValues = {
  name: string;
  email: string;
  password:string,
  confirmPassword:string,
};

const schema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  confirmPassword: joi.string()
    .valid(joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirmPassword does not match password' }),
});

export default function SignUpForm() {
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(schema) });
  const onSubmit = handleSubmit((data) => {
    reset();
    // console.log(data);
  });

  return (
    <form className=" bg-white p-4 w-full gap-4 flex flex-col" onSubmit={onSubmit}>
      <input className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('name')} placeholder="Enter Name" />
      <input className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('email')} placeholder="Enter Email" />
      <input type="password" className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('password')} placeholder="Enter Password" />
      <input type="password" className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('confirmPassword')} placeholder="Confirm Password" />
      {errors?.name && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.name.message}</p>}
      {errors?.email && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.email.message}</p>}
      {errors?.password && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.password.message}</p>}
      {errors?.confirmPassword && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.confirmPassword.message}</p>}
      <InputButton />

    </form>
  );
}
