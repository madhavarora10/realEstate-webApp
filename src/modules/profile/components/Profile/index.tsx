'use client';

import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Profile } from '../../../../common/types/profile';
import UpdateForm from '../form';
import PasswordUpdateForm from '../password-form';
import ImageUpdateForm from '../image-form';

// import LoginForm from '../form/index';
type Props = {
  heros:Profile
};
type User = any;
export const ProfilePage = (props) => {
  const { heros }:Props = props;
  const { data: session }:User = useSession();
  // console.log(session);
  return (
    <div className="flex gap-4 p-8 ">
      <div className=" bg-white w-1/3 p-4 flex flex-col items-center ">
        <h1 className=" font-primaryRegular font-wt-600 text-fs-1.5 text-primaryDark ">
          {session?.user?.name}
        </h1>
        <p className="font-primaryRegular font-wt-600 text-fs-0.875 text-card-descp ">
          {session?.user?.email}
        </p>

        <div className="w-40 mt-12 h-40 object-contain relative rounded-full  border-primary border-8">
          <Image src={session?.user.image ? `/profiles/${session?.user.image}` : heros.body.userImg} className="  object-contain object-center rounded-full" alt="user image" fill />
        </div>
        <div className=" w-full mt-8 ">
          <ImageUpdateForm modalContent={heros.body.imageModalContent} />

        </div>
      </div>
      <div className=" bg-white w-full py-8 px-4 flex flex-col items-center ">
        <h1 className="  font-wt-600 text-fs-2 text-primaryDark">{heros.body.heading}</h1>
        <div className=" w-106 mt-8">
          <UpdateForm modalContent={heros.body.nameModalContent} labels={heros.body.form} />
        </div>
        <h1 className=" mt-4 font-wt-600 text-fs-2 text-primaryDark">{heros.body.heading2}</h1>
        <div className=" w-106 mt-8">
          <PasswordUpdateForm modalContent={heros.body.modalContent} session={session} labels={heros.body.form} />
        </div>

      </div>

    </div>
  );
};
