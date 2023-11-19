/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchParamsType } from '../types/fetch-params';
import { properties } from '../../../assets/properties';
import { navbar } from '../../../assets/navbar';
import { footer } from '../../../assets/footer';

const fetch = (params: FetchParamsType) => {
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);
  const response = {
    properties,
    navbar,
    footer,
  };

  return response;
};

export const propertiesAPI = {
  fetch,
};
