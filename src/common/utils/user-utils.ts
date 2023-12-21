/* eslint-disable no-console */
import { jwtVerify } from 'jose';

export const isLoggedin = async (cookies) => {
  if (cookies.has('jwt')) {
  // console.log(jwt);
    try {
    // 1) verify token
      const jwtCookie = cookies.get('jwt');
      const decoded:any = await jwtVerify(jwtCookie.value, new TextEncoder().encode(process.env.JWT_SECRET));
      const { id }:{ id:string } = decoded;
      // 2) Check if user still exists
      // const currentUser = await User.findById({ _id: id });
      // if (!currentUser) {
      //   return { message: 'User not found', user: undefined, isLogged: false };
      // }
      // 3) Check if user changed password after the token was issued
      //   if (currentUser.changedPasswordAfter(decoded.iat)) {
      //     return next();
      //   }
      // THERE IS A LOGGED IN USER
      return { message: 'user logged in', id, isLogged: true };
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(cookies,'from');
  return {
    message: 'You are not Logged in', status: 404, id: undefined, isLogged: false,
  };
};
