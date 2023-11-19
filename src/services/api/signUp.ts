/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchParamsType } from '../types/fetch-params';
import { signUp } from '../../../assets/signUp';
import { footer } from '../../../assets/footer';
import { navbar } from '../../../assets/navbar';

const fetch = (params: FetchParamsType) => {
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);
  const response = {
    navbar,
    signUp,
    footer,
  };

  return response;
};

export const signUpAPI = {
  fetch,
};
