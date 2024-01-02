/* eslint-disable no-param-reassign */

'use client';

/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import joi from '@hapi/joi';
import { signIn } from 'next-auth/react';
import InputButton from '../../../../common/components/Button/InputButton';
import { loginUser, updatePassword } from '../../../../../libs/userData';
import Spinner from '../../../../common/components/Spinner';
import ModalContainer from '../../../../common/components/Modal';

type Props = {
  labels:{
    emailLabel:string,
    passwordLabel: string;
    passwordConfirmLabel: string;
    saveButton: string;
  },
  modalContent:{
    title:string,
    content:string,
  },
  session:any
};
type FormValues = {
  email:string
  password:string,
  passwordConfirm:string,
};

const schema = joi.object({
  password: joi.string().required(),
  passwordConfirm: joi.string()
    .valid(joi.ref('password'))
    .required()
    .messages({ 'any.only': 'passwordConfirm does not match password' }),
});

export default function PasswordUpdateForm({ labels, session, modalContent }:Props) {
  const {
    passwordLabel,
    passwordConfirmLabel,
  } = labels;

  const [loading, setLoading] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(schema) });
  const isModalActive = (state:boolean) => { setModalState(state); };
  const onSubmit = handleSubmit(async (data:FormValues) => {
    data.email = session?.user.email;
    setLoading(true);
    const res = await updatePassword(data);
    if (res.status === 201) {
      reset();
      setLoading(false);
      isModalActive(true);
    }
    // console.log(res);
  });

  return (
    <form className=" bg-white p-4 w-full gap-8 flex flex-col" onSubmit={onSubmit}>
      {modalState && <ModalContainer activeState={isModalActive} title={modalContent.title} content={modalContent.content} state={modalState} />}
      {/* <input disabled={loading} className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('email')} placeholder={emailLabel} /> */}
      <input disabled={loading} className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('password')} placeholder={passwordLabel} />
      <input disabled={loading} className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('passwordConfirm')} placeholder={passwordConfirmLabel} />
      {/* {errors?.email && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.email.message}</p>} */}
      {errors?.password && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.password.message}</p>}
      <div className=" w-24 m-auto">
        {loading ? <Spinner loading={loading} /> : <InputButton loading={loading} />}
      </div>

    </form>
  );
}
