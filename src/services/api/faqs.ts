/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchParamsType } from '../types/fetch-params';

const fetch = async (params: FetchParamsType) => {
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);
  const { faqs } = await import('../../../assets/property');
  const { navbar } = await import('../../../assets/navbar');
  const { footer } = await import('../../../assets/footer');

  const response = {
    faqs,
    navbar,
    footer,

  };

  return response;
};

export const faqsAPI = {
  fetch,
};
