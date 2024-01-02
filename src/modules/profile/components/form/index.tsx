/* eslint-disable react/jsx-indent */
/* eslint-disable no-param-reassign */

'use client';

/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import joi from '@hapi/joi';
import { useSession } from 'next-auth/react';
import InputButton from '../../../../common/components/Button/InputButton';
import { updateName } from '../../../../../libs/userData';
import Spinner from '../../../../common/components/Spinner';
import ModalContainer from '../../../../common/components/Modal';

type Props = {
  labels:{
    name:string,
  },
  modalContent:{
    title:string,
    content:string,
  },
};
type FormValues = {
  name:string,
  email: string;

};

const schema = joi.object({
  name: joi.string().required(),
});

export default function UpdateForm({ labels, modalContent }:Props) {
  const {
    name,
  } = labels;
  const [loading, setLoading] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const { data: session, update } = useSession();
  // console.log(session);
  const isModalActive = (state:boolean) => { setModalState(state); };
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(schema) });
  const onSubmit = handleSubmit(async (data:FormValues) => {
    setLoading(true);
    data.email = session?.user.email;
    const res = await updateName(data);
    await update({ name: data.name, image: session?.user.image });
    // console.log(res);
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
      <input disabled={loading} className=" border-2 px-4 py-2 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('name')} placeholder={name} />
      {errors?.name && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.name.message}</p>}

      <div className=" w-24 m-auto">
        {loading ? <Spinner loading={loading} /> : <InputButton loading={loading} />}
      </div>

    </form>
  );
}
