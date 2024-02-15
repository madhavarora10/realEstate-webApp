/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchParamsType } from '../fetch-params';
import { footer } from '../../../assets/footer';
import { profile } from '../../../assets/profile';
import { navbar } from '../../../assets/navbar';

const fetch = (params: FetchParamsType) => {
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);
  const response = {
    navbar,
    profile,
    footer,
  };

  return response;
};

export const profileAPI = {
  fetch,
};
