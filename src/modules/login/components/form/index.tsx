'use client';

/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import joi from '@hapi/joi';
import InputButton from '../../../../common/components/Button/InputButton';
import { loginUser } from '../../../../../libs/userData';
import Spinner from '../../../../common/components/Spinner';

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
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(schema) });
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const res = await loginUser(data);
    reset();
    setLoading(false);
    // console.log(res);
  });

  return (
    <form className=" bg-white p-4 w-full gap-4 flex flex-col" onSubmit={onSubmit}>
      <input disabled={loading} className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('email')} placeholder={form.emailLabel} />
      <input disabled={loading} type="password" className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('password')} placeholder={form.passwordLabel} />
      {errors?.email && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.email.message}</p>}
      {errors?.password && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.password.message}</p>}
      {loading ? <Spinner loading={loading} /> : <InputButton loading={loading} />}

    </form>
  );
}
