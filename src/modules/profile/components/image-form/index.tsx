/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

'use client';

/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import InputButton from '../../../../common/components/Button/InputButton';

import { updateImage } from '../../../../../libs/userData';
import Spinner from '../../../../common/components/Spinner';
import ModalContainer from '../../../../common/components/Modal';

type Props = {
  modalContent:{
    title:string,
    content:string,
  },
};
type FormValues = {
  image:File,
  email:string
};

export default function ImageUpdateForm({ modalContent }:Props) {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm<FormValues>();

  const isModalActive = (state:boolean) => { setModalState(state); };

  const onSubmit = handleSubmit(async (formInput:FormValues) => {
    setLoading(true);
    formInput.image = formInput.image[0];
    formInput.email = session?.user.email;
    // console.log(formInput);
    // console.log('🚀 ~ file: index.tsx:42 ~ onSubmit ~ re̥s:', res.data.updateUser.photo);
    // console.log( res.data.updateUser);
    const res = await updateImage(formInput);
    await update({ image: res.data.updateUser.photo, name: session?.user.name });
    // console.log(res);
    if (res.status === 201) {
      reset();
      setLoading(false);
      isModalActive(true);
      console.log(modalState);
    }
    // console.log(res);
  });

  return (
    <form className="  bg-white p-4 w-full items-center gap-2 flex flex-col" onSubmit={onSubmit}>
      {modalState && <ModalContainer activeState={isModalActive} title={modalContent.title} content={modalContent.content} state={modalState} />}
      <input disabled={loading} type="file" className="  w-full text-fs-0.7" {...register('image')} id="img" />
      <div className="  flex justify-center">
        {loading ? <Spinner loading={loading} /> : <InputButton loading={loading} />}
      </div>

    </form>
  );
}
