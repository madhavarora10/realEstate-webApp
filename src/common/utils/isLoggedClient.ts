import { hasCookie } from 'cookies-next';
// import { cookies } from 'next/headers';
import { isLoggedin } from './user-utils';

export const isLoggedClient = async () => {
//   const {
//     id,
//   } = isLoggedin();

  console.log(hasCookie('jwt'));
};
