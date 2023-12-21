'use client';

/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import joi from '@hapi/joi';
import InputButton from '../../../../common/components/Button/InputButton';
import { createUser } from '../../../../../libs/userData';
import Spinner from '../../../../common/components/Spinner';

type FormValues = {
  name: string;
  email: string;
  password:string,
  passwordConfirm:string,
};

const schema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  passwordConfirm: joi.string()
    .valid(joi.ref('password'))
    .required()
    .messages({ 'any.only': 'passwordConfirm does not match password' }),
});

export default function SignUpForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(schema) });
  const onSubmit = handleSubmit(async (data:FormValues) => {
    setLoading(true);
    const res = await createUser(data);
    if (res.status !== 200) {
      console.log('error');
    }
    reset();
    setLoading(false);
    // console.log(data);
  });

  return (
    <form className=" bg-white p-4 w-full gap-4 flex flex-col" onSubmit={onSubmit}>
      <input disabled={loading} className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('name')} placeholder="Enter Name" />
      <input disabled={loading} className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('email')} placeholder="Enter Email" />
      <input disabled={loading} type="password" className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('password')} placeholder="Enter Password" />
      <input disabled={loading} type="password" className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('passwordConfirm')} placeholder="Confirm Password" />
      {errors?.name && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.name.message}</p>}
      {errors?.email && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.email.message}</p>}
      {errors?.password && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.password.message}</p>}
      {errors?.passwordConfirm && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.passwordConfirm.message}</p>}
      {loading ? <Spinner loading={loading} /> : <InputButton loading={loading} />}
    </form>
  );
}
