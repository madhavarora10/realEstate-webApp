import { FetchParamsType } from '../types/fetch-params';

const fetch = async (params: FetchParamsType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { locale = 'en' } = params;
  // console.log('🚀 ~ file: home.ts:5 ~ fetch ~ locale:', locale);

  const { aboutUs } = await import('../../../assets/aboutUs');
  const { navbar } = await import('../../../assets/navbar');
  const { footer } = await import('../../../assets/footer');

  const response = {
    aboutUs,
    navbar,
    footer,

  };

  return response;
};

export const aboutUsAPI = {
  fetch,
};
