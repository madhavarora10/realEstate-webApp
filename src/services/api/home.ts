/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchParamsType } from '../fetch-params';
import { index } from '../../../assets/index';
import { navbar } from '../../../assets/navbar';
import { footer } from '../../../assets/footer';

const fetch = (params: FetchParamsType) => {
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);

  const response = {
    index,
    navbar,
    footer,

  };

  return response;
};

export const homeAPI = {
  fetch,
};
