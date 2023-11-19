/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchParamsType } from '../types/fetch-params';
import { propertyView } from '../../../assets/propertyView';
import { navbar } from '../../../assets/navbar';
import { footer } from '../../../assets/footer';

const fetch = (params: FetchParamsType) => {
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);
  const response = {
    propertyView,
    navbar,
    footer,
  };

  return response;
};

export const propertyViewAPI = {
  fetch,
};
