/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchParamsType } from '../fetch-params';
import { postProperty } from '../../../assets/postProperty';
import { navbar } from '../../../assets/navbar';
import { footer } from '../../../assets/footer';

const fetch = (params: FetchParamsType) => {
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);
  const response = {
    postProperty,
    navbar,
    footer,
  };

  return response;
};

export const postPropertyAPI = {
  fetch,
};
