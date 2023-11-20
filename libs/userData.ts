/* eslint-disable object-shorthand */
import axios from 'axios';

export const createUser = async (User) => {
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
export const logOut = async () => {
  const response = await axios.get('http://localhost:3000/api/user/logout');
  return response;
};
