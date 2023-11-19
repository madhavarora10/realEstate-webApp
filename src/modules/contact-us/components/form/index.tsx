/* eslint-disable react/no-array-index-key */
/* eslint-disable react/display-name */
/* eslint-disable max-len */
import {
  useForm, UseFormRegister, SubmitHandler,
} from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
// import Link from 'next/link';
import React from 'react';
import { contactUs } from '../../../../../assets/contactUs';
import schema from '../../../../common/components/forms/form-schema';

// enum SubjectEnum {
//   help = 'Help',
//   fraud = 'Fraud',
//   sales = 'Sales',
//   others = 'Others',
// }

type Inputs = {
  name: string,
  email: string,
  subject:any,
  message:string,

};
interface IFormValues {
  [x: string]: any;
  value: any;
}

const Select = React.forwardRef<HTMLSelectElement, { label: string, list_values:IFormValues } & ReturnType<UseFormRegister<IFormValues>>
>(({
  onChange, onBlur, label, list_values,
}, ref) => (
  <>
    <label className=" font-inter font-wt-500 text-fs-0.875 leading-6  text-0E0B3D" htmlFor="subject">{label}</label>
    <div className=" px-2 py-3 font-inter font-wt-400 leading-6 text-fs-0.875 border border-[#D5C8F9]">
      <select className=" w-full outline-none " id="subject" ref={ref} onChange={onChange} onBlur={onBlur}>
        {list_values?.map((el:any, index:any) => (
          <option key={index} value={el}>{el}</option>

        ))}

      </select>
    </div>
  </>
));
export const FormContact = (heros:any) => {
  const {
    formLabels,
  } = heros;
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    resolver: joiResolver(schema),
  });
  const onSub: SubmitHandler<Inputs> = () => { // console.log(data);
  };

  return (

    <form className=" w-full grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSub)}>

      <div className="flex  flex-col">
        <label htmlFor="name" className=" font-inter font-wt-500 text-fs-0.875 leading-6  text-0E0B3D">{formLabels.labelName}</label>
        <input style={{ border: '1px solid #D5C8F9 ' }} className=" py-2  px-3 font-inter  text-fs-0.875 font-wt-500 leading-6 text-B3B8D0 rounded-md outline-none border-[#D5C8F9]" placeholder={formLabels.defaultName} {...register('name')} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className=" font-inter font-wt-500 text-fs-0.875 leading-6  text-0E0B3D">{formLabels.labelEmail}</label>
        <input id="email" style={{ border: '1px solid #D5C8F9 ' }} className=" py-2  px-3 text-fs-0.875 font-inter font-wt-500 text-B3B8D0 leading-6 rounded-md outline-none border-[#D5C8F9]" placeholder={formLabels.defaultEmail} {...register('email')} />
      </div>
      {/* <div className="flex flex-col">
        <label htmlFor="subject" className=" font-inter font-wt-500 text-fs-0.875 leading-6  text-0E0B3D">{formLabels.labelSubject}</label>
        <input id="subject" style={{ border: '1px solid #D5C8F9 ' }} className=" py-2  px-3 font-inter  text-fs-0.875 font-wt-500 leading-6 text-B3B8D0 rounded-md outline-none border-[#D5C8F9]" defaultValue="help" {...register('subject')} />
      </div> */}

      <Select list_values={formLabels.defaultText} label="Subject" {...register('subject')} />

      <div className="flex flex-col">
        <label htmlFor="message" className=" font-inter font-wt-500 text-fs-0.875 leading-6  text-0E0B3D">{formLabels.labelMessage}</label>
        <input id="message" style={{ border: '1px solid #D5C8F9 ' }} className=" py-8  px-3 text-fs-0.875 font-inter font-wt-500  text-B3B8D0 leading-6 rounded-md outline-none border-[#D5C8F9]" placeholder={formLabels.defaultMessage} {...register('message')} />
      </div>

      {errors.email && <span>This field is required</span>}

      <div className="flex justify-center mt-4">

        <button type="submit" style={{ borderRadius: '50px', backgroundColor: '#1463FF' }} className=" cursor-pointer py-2 px-40 border-none font-wt-500 leading-6 text-white ">{contactUs.formLabels.buttonText}</button>

      </div>
      <p className=" flex justify-center mt-4 font-inter font-wt-500 text-fs-1 left-8">{contactUs.formLabels.poweredText}</p>
    </form>
  );
};
