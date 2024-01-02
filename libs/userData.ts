/* eslint-disable object-shorthand */
import axios from 'axios';
import { headers } from 'next/headers';
import { UpdateNameBody } from '../src/common/types';

 type UserType = {
   name:string,
   email:string,
   password:string,
   passwordConfirm:string

 };
 type updatePasswordType = {
   email:string,
   password:string,
   passwordConfirm:string
 };

export const createUser = async (User:UserType) => {
  const {
    name,
    email,
    password,
    passwordConfirm,
  } = User;
  const response = await axios.post('http://localhost:3000/api/user/signup', {
    name,
    email,
    password,
    passwordConfirm,
  });
  return response;
};
export const loginUser = async (User) => {
  const {
    email,
    password,
  } = User;
  const response = await axios.post('http://localhost:3000/api/user/login', {
    email,
    password,
  });
  return response;
};

export const updatePassword = async (User:updatePasswordType) => {
  const {
    email,
    password,
    passwordConfirm,
  } = User;
  const response = await axios.put('http://localhost:3000/api/user/update-password', {
    email,
    password,
    passwordConfirm,
  });
  return response;
};
export const updateName = async (User:UpdateNameBody) => {
  const {
    email,
    name,

  } = User;
  const response = await axios.put('http://localhost:3000/api/user/update-name', {
    email,
    name,
  });
  return response;
};
export const updateImage = async (formData) => {
  console.log(formData);

  const response = await axios.put('http://localhost:3000/api/user/update-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(response);
  
  return response;
};
