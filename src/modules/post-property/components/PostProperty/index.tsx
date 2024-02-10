/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useState } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import joi from '@hapi/joi';
import { useForm, SubmitHandler } from 'react-hook-form';
import Steps from 'antd/es/steps';
import { ObjectId } from 'mongoose';
import { useSession } from 'next-auth/react';
import { PostProperty } from '../../../../common/types';
import { postPropertyFunction } from '../../../../../libs/postData';
import InputButton from '../../../../common/components/Button/InputButton';
import Spinner from '../../../../common/components/Spinner';
import ModalContainer from '../../../../common/components/Modal';

type Props = {
  heros:PostProperty
};

type FormValues = {
  name: string
  description: string,
  squareArea: number,
  parkingSelect: string,
  deposit: string,
  price: number,
  bathrooms: number,
  bedrooms: number,
  repairQuality: string,
  city: string,
  state: string,
  country: string,
  address: string,
  pinCode: number,
  coordinate1:number,
  coordinate2:number,
  type: string,
  imageCover:File | undefined,
  images:FileList | undefined,
  image1:File | undefined,
  image2:File | undefined,
  image3:File | undefined,
  image4:File | undefined,
  image5:File | undefined,
  laundry:string,
  cooling:string,
  heating:string,
  yearBuilt:number,
  agent:string
};

type FieldName = keyof FormValues;
// const JoiWithImage= joi.extend(ImageExtension);
const schema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  squareArea: joi.number().required(),
  parkingSelect: joi.string().required(),
  deposit: joi.string().required(),
  price: joi.number().required(),
  bedrooms: joi.number().required(),
  bathrooms: joi.number().required(),
  repairQuality: joi.string(),
  city: joi.string().required(),
  state: joi.string().required(),
  country: joi.string().required(),
  address: joi.string().required(),
  pinCode: joi.number().required(),
  coordinate1: joi.number().required(),
  coordinate2: joi.number().required(),
  type: joi.string(),
  cooling: joi.string(),
  laundry: joi.string(),
  heating: joi.string(),
  images: joi.any().required(),
  imageCover: joi.any().required(),
  yearBuilt: joi.number(),
});
const steps = [
  {
    title: 'First',
    fields: ['repairQuality', 'bathrooms', 'bedrooms', 'price', 'deposit', 'parkingSelect', 'squareArea', 'description', 'name'],
  },
  {
    title: 'Second',
    fields: ['type', 'coordinates', 'pinCode', 'address', 'country', 'state', 'city', 'cooling', 'laundry', 'heating'],
  },
  {
    title: 'Last',
    fields: ['imageCover', 'images'],
  },
];

export const PostPropertyComp = (props) => {
  const { heros }:Props = props;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [previousStep, setPreviousStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  // console.log(heros);
  const {
    register, reset, handleSubmit, trigger, formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(schema) });

  const isModalActive = (state:boolean) => { setModalState(state); };

  const { data: session } = useSession();
  // console.log(session);

  const onSubmit: SubmitHandler<FormValues> = async (formInput) => {
    setLoading(true);
    formInput.imageCover = formInput.imageCover[0];
    formInput.image1 = formInput.images[0];
    formInput.image2 = formInput.images[1];
    formInput.image3 = formInput.images[2];
    formInput.image4 = formInput.images[3];
    formInput.image5 = formInput.images[4];
    formInput.agent = session.user.email;

    const res = await postPropertyFunction(formInput);
    // if (res.status !== 200) {
    //   console.log('error');
    reset();
    setLoading(false);
    isModalActive(true);

    console.log(res);
  };

  const next = async () => {
    const { fields } = steps[currentStep];
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep <= steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div>
      <h1 className=" text-center font-primaryRegular text-fs-3 leading-9 text-primaryDark font-wt-700">{heros.body.heading}</h1>
      <Steps className="my-20 text-black" current={currentStep} items={items} />
      <div className=" relative  flex flex-col items-center justify-center ">
        {modalState && <ModalContainer activeState={isModalActive} title={heros.body.modalContent.title} content={heros.body.modalContent.content} state={modalState} />}
        {loading ? (
          <div>
            <Spinner loading={loading} />
          </div>
        ) : (
          <form className="bg-white w-10/12  mt-8  " onSubmit={handleSubmit(onSubmit)}>

            {/* FORM 1 */}
            {currentStep === 0 && (
            <>
              <h1 className=" text-center  leading-8 text-fs-2 mt-12 font-wt-500">{heros.body.firstForm.heading}</h1>
              <div className="px-24  flex mt-12 flex-wrap gap-12 ">
                <div className="flex flex-col ">
                  <label htmlFor="name">Name :</label>
                  <input type="text" id="name" className=" border-2  px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('name')} placeholder="Enter Name" />
                  {errors?.name && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="sqft">Square Area :</label>
                  <input min={1} type="number" id="sqft" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('squareArea')} placeholder={heros.body.firstForm.sqft} />
                  {errors?.squareArea && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.squareArea.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="parkingSelect">Parking :</label>
                  <select className="border-2 px-16 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-non" id="parkingSelect" {...register('parkingSelect')}>
                    <option label={heros.body.firstForm.parkingSelect.select[0]} value={heros.body.firstForm.parkingSelect.select[0]} />
                    <option label={heros.body.firstForm.parkingSelect.select[1]} value={heros.body.firstForm.parkingSelect.select[1]} />
                  </select>
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="deposit">Deposit :</label>
                  <input min={1} type="number" id="deposit" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('deposit')} placeholder={heros.body.firstForm.deposit} />
                  {errors?.deposit && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.deposit.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="price">Price :</label>
                  <input min={1} type="number" id="price" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('price')} placeholder={heros.body.firstForm.price} />
                  {errors?.price && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.price.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="bathrooms">Bathrooms :</label>
                  <input min={1} type="number" id="bathrooms" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('bathrooms')} placeholder={heros.body.firstForm.bathrooms} />
                  {errors?.bathrooms && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.bathrooms.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="bedrooms">Bedrooms :</label>
                  <input min={1} type="number" id="bedrooms" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('bedrooms')} placeholder={heros.body.firstForm.bedrooms} />
                  {errors?.bedrooms && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.bedrooms.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="repairQuality">Repair Quality :</label>
                  <input type="text" id="repairQuality" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('repairQuality')} placeholder={heros.body.firstForm.repairQuality} />
                  {errors?.repairQuality && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.repairQuality.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="descp">Description :</label>
                  <textarea rows={5} cols={33} id="descp" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('description')} placeholder="Enter the Description of your property..." />
                  {errors?.description && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.description.message}</p>}
                </div>
                {/* {loading ? <Spinner loading={loading} /> : <InputButton loading={loading} />} */}
              </div>

            </>
            )}

            {/* FORM 2 */}
            {currentStep === 1 && (
            <>
              <h1 className=" text-center leading-8 text-fs-2 mt-12 font-wt-500">{heros.body.secondForm.heading}</h1>
              <div className="px-24  flex mt-12  flex-wrap gap-12 ">
                <div className="flex flex-col ">
                  <label htmlFor="address">Address :</label>
                  <input type="text" id="address" className=" border-2  px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('address')} placeholder={heros.body.secondForm.address} />
                  {errors?.address && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.address.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="city">City :</label>
                  <input type="text" id="city" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('city')} placeholder={heros.body.secondForm.city} />
                  {errors?.city && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.city.message}</p>}
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="state">State :</label>
                  <input min={1} type="string" id="state" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('state')} placeholder={heros.body.secondForm.state} />
                  {errors?.state && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.state.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="pincode">Pincode :</label>
                  <input min={1} type="number" id="pincode" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('pinCode')} placeholder={heros.body.secondForm.pincode} />
                  {errors?.pinCode && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.pinCode.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="country">Country :</label>
                  <input type="text" id="country" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('country')} placeholder={heros.body.secondForm.country} />
                  {errors?.country && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.country.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="type">Laundry :</label>
                  <select className="border-2 px-16 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-non" id="type" {...register('laundry')}>
                    <option label={heros.body.secondForm.laundry.select[0]} value={heros.body.secondForm.laundry.select[0]} />
                    <option label={heros.body.secondForm.laundry.select[1]} value={heros.body.secondForm.laundry.select[1]} />
                  </select>
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="heating">Heating :</label>
                  <select className="border-2 px-12 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-non" id="heating" {...register('heating')}>
                    <option label={heros.body.secondForm.heating.select[0]} value={heros.body.secondForm.heating.select[0]} />
                    <option label={heros.body.secondForm.heating.select[1]} value={heros.body.secondForm.heating.select[1]} />
                  </select>
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="cooling">Cooling :</label>
                  <select className="border-2 px-10 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-non" id="cooling" {...register('cooling')}>
                    <option label={heros.body.secondForm.cooling.select[0]} value={heros.body.secondForm.cooling.select[0]} />
                    <option label={heros.body.secondForm.cooling.select[1]} value={heros.body.secondForm.cooling.select[1]} />
                  </select>
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="type">Type :</label>
                  <select className="border-2 px-12 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-non" id="type" {...register('type')}>
                    <option label={heros.body.secondForm.type.select[0]} value={heros.body.secondForm.type.select[0]} />
                    <option label={heros.body.secondForm.type.select[1]} value={heros.body.secondForm.type.select[1]} />
                    <option label={heros.body.secondForm.type.select[2]} value={heros.body.secondForm.type.select[2]} />
                  </select>
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="coordinates">Coordinates :</label>
                  <input min={1} type="number" id="coordinates" className="  border-2 px-2 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('coordinate1')} placeholder={heros.body.secondForm.coordinates.lat} />
                  {errors?.coordinate1 && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.coordinate1.message}</p>}
                  <input min={1} type="number" id="coordinates" className="  border-2 px-2 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('coordinate2')} placeholder={heros.body.secondForm.coordinates.long} />
                  {errors?.coordinate2 && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.coordinate2.message}</p>}
                </div>

                {/* {loading ? <Spinner loading={loading} /> : <InputButton loading={loading} />} */}
              </div>

            </>
            )}

            {/* FORM 3 */}
            {currentStep === 2 && (
            <>
              <h1 className=" text-center leading-8 text-fs-2 mt-12 font-wt-500">{heros.body.thirdForm.heading}</h1>
              <div className="px-24  flex mt-12 flex-wrap gap-12 ">
                <div className="flex flex-col ">
                  <label htmlFor="imageCover">Image Cover :</label>
                  <input type="file" accept="image/*" id="imageCover" className=" border-2  px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('imageCover')} placeholder={heros.body.thirdForm.imageCover} />
                  {errors?.imageCover && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.imageCover.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="images">Images :</label>
                  <input multiple type="file" id="images" accept="image/*" className="  border-2 px-4 py-2 mt-4 text-fs-0.7 font-primaryRegular rounded-md outline-none" {...register('images')} placeholder={heros.body.thirdForm.images} />
                  {errors?.images && <p className=" font-primaryRegular text-red text-fs-0.7">{errors.images.message}</p>}
                </div>

                {/* {loading ? <Spinner loading={loading} /> : <InputButton loading={loading} />} */}
              </div>

            </>
            )}
            {/* NAVIGATION */}

            <div className="w-full h-14 flex justify-between mt-20 ">
              <button onClick={() => prev()} disabled={currentStep === 0} style={{ backgroundColor: 'black' }} type="button" className=" cursor-pointer disabled:cursor-not-allowed rounded-md px-4 py-3 text-white">{heros.body.prevButton}</button>
              {currentStep === 2 ? (
                <div>
                  <InputButton loading={loading} />
                </div>
              ) : <button onClick={() => next()} style={{ backgroundColor: 'black' }} type="button" className=" rounded-md px-4 py-3 text-white cursor-pointer">{heros.body.nextButton}</button>}

            </div>
          </form>
        )}

      </div>
    </div>
  );
};
