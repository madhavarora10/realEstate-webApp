/* eslint-disable @next/next/no-server-import-in-page */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */

import { setCookie } from 'cookies-next';

const jwt = require('jsonwebtoken');

const ExpiresIn:number = parseInt(process.env.JWT_COOKIE_EXPIRES_IN);

const signToken = (id:number) => jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
});
const logoutCookie = () => {
  setCookie('jwt', 'test', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
};

const createSendToken = (user) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now().valueOf() + ExpiresIn * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    secure: true,

  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  // Remove password from the Output
  user.password = undefined;
  return {
    token,
    user,
    cookieOptions,
  };
};
export {
  signToken,
  logoutCookie,
  createSendToken,
};
