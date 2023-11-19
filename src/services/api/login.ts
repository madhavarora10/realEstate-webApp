/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchParamsType } from '../types/fetch-params';
import { login } from '../../../assets/login';
import { footer } from '../../../assets/footer';
import { navbar } from '../../../assets/navbar';

const fetch = (params: FetchParamsType) => {
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);
  const response = {
    navbar,
    login,
    footer,
  };

  return response;
};

export const loginAPI = {
  fetch,
};
